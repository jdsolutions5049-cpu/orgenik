import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, Check, Truck, ShieldCheck } from 'lucide-react';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    cartTotal,
    cartCount,
    freeShippingThreshold,
    remainingForFreeShipping,
    placeOrder,
    navigateTo,
    user
  } = useApp();

  const [couponCode, setCouponCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'ORGENIK10' || code === 'TRADITIONAL10') {
      const discount = Math.round(cartTotal * 0.10);
      setDiscountAmount(discount);
      setAppliedCoupon(code);
      setCouponCode('');
    } else if (code === 'FREESHIP' || code === 'FIRSTFARM') {
      setDiscountAmount(50);
      setAppliedCoupon(code);
      setCouponCode('');
    } else {
      alert('Invalid code! Try "ORGENIK10" for 10% off.');
    }
  };

  const deliveryFee = remainingForFreeShipping === 0 ? 0 : 50;
  const finalTotal = Math.max(0, cartTotal - discountAmount + deliveryFee);
  const shippingProgress = Math.min(100, Math.round((cartTotal / freeShippingThreshold) * 100));

  const handleCompleteOrder = () => {
    const orderId = placeOrder({
      discount: discountAmount,
      coupon: appliedCoupon
    });
    setIsCheckingOut(false);
    navigateTo('account');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => {
          setIsCartOpen(false);
          setIsCheckingOut(false);
        }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col transform transition-transform animate-in slide-in-from-right duration-300">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-[#EBF5EE] bg-[#FBFDFB] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#2D6A4F]" />
              <h2 className="text-lg font-bold text-[#0F2D1F]">
                Your Shopping Cart
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#EBF5EE] text-[#2D6A4F]">
                {cartCount} {cartCount === 1 ? 'item' : 'items'}
              </span>
            </div>

            <button
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckingOut(false);
              }}
              className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#EBF5EE]/80 px-5 py-3 border-b border-emerald-100/60">
            <div className="flex items-center justify-between text-xs text-[#143628] mb-1.5">
              <span className="flex items-center gap-1.5 font-medium">
                <Truck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                {remainingForFreeShipping > 0 ? (
                  <span>
                    Add <strong className="font-bold text-[#E65C00]">₹{remainingForFreeShipping}</strong> more for <strong>FREE Delivery</strong>
                  </span>
                ) : (
                  <span className="font-semibold text-emerald-800">
                    🎉 You have unlocked <strong>FREE Delivery</strong>!
                  </span>
                )}
              </span>
              <span className="font-semibold text-emerald-900">{shippingProgress}%</span>
            </div>
            <div className="w-full h-2 bg-emerald-200/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#2D6A4F] to-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>

          {/* Checkout view vs Items list */}
          {!isCheckingOut ? (
            <>
              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {cart.length === 0 ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-[#EBF5EE] flex items-center justify-center text-emerald-700">
                      <ShoppingBag className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#143628]">Your cart is empty</h3>
                      <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
                        Explore our native millets, fragrant rice varieties and traditional cold-pressed pulses.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsCartOpen(false);
                        navigateTo('products');
                      }}
                      className="px-6 py-2.5 bg-[#143628] hover:bg-[#2D6A4F] text-white text-xs font-semibold rounded-full shadow transition-all"
                    >
                      Browse Products
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3.5 p-3 rounded-2xl bg-[#FBFDFB] border border-gray-100 shadow-sm hover:border-emerald-100 transition-colors"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 rounded-xl object-cover border border-emerald-100/60 flex-shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <div>
                            <h4 className="text-sm font-bold text-[#0F2D1F] truncate">
                              {item.product.name}
                            </h4>
                            <p className="text-xs text-gray-500 font-marathi">
                              {item.product.marathiName}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center gap-1.5 border border-emerald-200/80 rounded-lg px-2 py-0.5 bg-white">
                            <button
                              onClick={() => updateCartQuantity(item.id, -1)}
                              className="text-gray-500 hover:text-[#143628]"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-semibold px-1.5 text-gray-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateCartQuantity(item.id, 1)}
                              className="text-gray-500 hover:text-[#143628]"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="text-sm font-bold text-[#143628]">
                            ₹{item.product.price * item.quantity}
                            <span className="text-[10px] font-normal text-gray-500 ml-1">
                              (₹{item.product.price}/{item.product.unit})
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer with Totals */}
              {cart.length > 0 && (
                <div className="p-5 border-t border-[#EBF5EE] bg-[#FBFDFB] space-y-3">
                  {/* Coupon Input */}
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Coupon: ORGENIK10"
                      className="flex-1 text-xs border border-gray-200 rounded-xl px-3 py-2 uppercase placeholder:normal-case focus:outline-none focus:border-[#2D6A4F]"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-[#2D6A4F] text-xs font-semibold rounded-xl transition-colors border border-emerald-200"
                    >
                      Apply
                    </button>
                  </form>

                  {appliedCoupon && (
                    <div className="flex items-center justify-between text-xs bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-lg border border-emerald-200">
                      <span className="flex items-center gap-1 font-medium">
                        <Check className="w-3.5 h-3.5" /> Coupon '{appliedCoupon}' applied!
                      </span>
                      <button
                        onClick={() => {
                          setAppliedCoupon('');
                          setDiscountAmount(0);
                        }}
                        className="text-gray-400 hover:text-red-500 text-[11px]"
                      >
                        Remove
                      </button>
                    </div>
                  )}

                  {/* Price breakdown */}
                  <div className="space-y-1.5 text-xs text-gray-600 pt-1">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold text-gray-900">₹{cartTotal}</span>
                    </div>

                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-700">
                        <span>Discount</span>
                        <span>-₹{discountAmount}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span>
                        {deliveryFee === 0 ? (
                          <strong className="text-emerald-700 font-semibold">FREE</strong>
                        ) : (
                          `₹${deliveryFee}`
                        )}
                      </span>
                    </div>

                    <div className="flex justify-between text-base font-bold text-[#0F2D1F] pt-2 border-t border-gray-200">
                      <span>Total Amount</span>
                      <span>₹{finalTotal}</span>
                    </div>
                  </div>

                  {/* Proceed to Checkout Button */}
                  <button
                    onClick={() => setIsCheckingOut(true)}
                    className="w-full py-3.5 bg-[#E65C00] hover:bg-[#FF7A00] active:scale-[0.99] text-white text-sm font-bold rounded-2xl shadow-lg shadow-orange-600/20 hover:shadow-orange-600/30 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                    <span>Safe & Hygienic Pan-India Farmer Delivery</span>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Streamlined Checkout Confirmation Screen */
            <div className="flex-1 overflow-y-auto p-5 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <h3 className="text-base font-bold text-[#143628]">Order Confirmation</h3>
                  <button
                    onClick={() => setIsCheckingOut(false)}
                    className="text-xs text-[#2D6A4F] hover:underline font-semibold"
                  >
                    ← Back to Cart
                  </button>
                </div>

                {/* Delivery Address Preview */}
                <div className="bg-[#F4F9F5] p-3.5 rounded-2xl border border-emerald-100">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-[#143628] uppercase tracking-wider">
                      Delivering to
                    </span>
                    <span className="text-[10px] bg-emerald-200/60 text-[#143628] font-semibold px-2 py-0.5 rounded-full">
                      Home (Default)
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-gray-800">{user.name}</p>
                  <p className="text-xs text-gray-600 leading-relaxed mt-0.5">
                    {user.addresses[0]?.line1}, {user.addresses[0]?.area}, {user.addresses[0]?.city} - {user.addresses[0]?.pincode}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Phone: {user.phone}</p>
                </div>

                {/* Payment Selection */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#143628] uppercase tracking-wider">
                    Payment Method
                  </span>
                  
                  <div className="p-3 bg-white rounded-xl border-2 border-[#2D6A4F] flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-1 bg-green-100 text-green-800 font-bold text-[10px] rounded">
                        UPI
                      </span>
                      <div>
                        <div className="text-xs font-bold text-gray-800">Instant UPI Payment</div>
                        <div className="text-[11px] text-gray-500">{user.paymentMethods[0]?.label}</div>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center text-[10px]">
                      ✓
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-gray-200 flex items-center justify-between opacity-80 hover:opacity-100 cursor-pointer">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 font-bold text-[10px] rounded">
                        COD
                      </span>
                      <div className="text-xs font-medium text-gray-800">Cash on Delivery (Pay at Doorstep)</div>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-gray-50 p-3.5 rounded-2xl space-y-1.5 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Items ({cartCount})</span>
                    <span>₹{cartTotal}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-700">
                      <span>Discount</span>
                      <span>-₹{discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-gray-900 pt-2 border-t border-gray-200">
                    <span>Total Amount</span>
                    <span className="text-[#0F2D1F]">₹{finalTotal}</span>
                  </div>
                </div>
              </div>

              {/* Confirm Order Button */}
              <div className="pt-4 border-t border-gray-100">
                <button
                  onClick={handleCompleteOrder}
                  className="w-full py-4 bg-[#143628] hover:bg-[#2D6A4F] active:scale-[0.99] text-white font-bold rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                  <span>Place Order (₹{finalTotal})</span>
                </button>
                <p className="text-[11px] text-gray-400 text-center mt-2">
                  By placing this order you support Indian sustainable farmers directly.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
