'use client';
import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

// Константи
const PRESET_AMOUNTS = [10, 25, 50, 100, 500];
const CUSTOM_AMOUNT_ID = 'custom';

// Типи
interface FormData {
  amount: number;
  paymentMethod: 'credit' | 'paypal' | '';
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface FormErrors {
  amount?: string;
  paymentMethod?: string;
  cardNumber?: string;
  expiryDate?: string;
  cvc?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

export default function PaymentForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | string>(0);
  const [customAmount, setCustomAmount] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    amount: 0,
    paymentMethod: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    firstName: '',
    lastName: '',
    email: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const customAmountInputRef = useRef<HTMLInputElement>(null);

  const finalAmount = selectedAmount === 'custom' ? customAmount : (selectedAmount as number);


  const validateForm = useCallback((): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (finalAmount <= 0) {
      newErrors.amount = "Please select a donation amount";
    }
    
    if (!formData.paymentMethod) {
      newErrors.paymentMethod = "Select a payment method";
    }
    
    if (formData.paymentMethod === 'credit') {
      if (!formData.cardNumber || formData.cardNumber.length < 16) {
        newErrors.cardNumber = "Invalid card number";
      }
      if (!formData.expiryDate || !/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
        newErrors.expiryDate = "Enter a valid expiry date (MM/YY)";
      }
      if (!formData.cvc || formData.cvc.length < 3) {
        newErrors.cvc = "Enter a valid CVC/CVV";
      }
    }
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Enter your first name";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Enter your last name";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    return newErrors;
  }, [finalAmount, formData]);

  // Обробники подій
  const handleAmountSelect = useCallback((value: number | string) => {
    setSelectedAmount(value);
    setErrors(prev => ({ ...prev, amount: undefined }));
    
    if (value === 'custom') {
      setTimeout(() => customAmountInputRef.current?.focus(), 0);
    } else {
      setCustomAmount(0);
    }
  }, []);

  const handleCustomAmountChange = useCallback((value: string) => {
    const numValue = parseFloat(value) || 0;
    setCustomAmount(numValue);
    setSelectedAmount('custom');
    setErrors(prev => ({ ...prev, amount: undefined }));
  }, []);

  const handleInputChange = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  }, []);

  const handleSubmit = async () => {
    const newErrors = validateForm();
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Тут буде API виклик
      const donationData = {
        ...formData,
        amount: finalAmount
      };
      
      console.log('Donation submitted:', donationData);
      
      // Симуляція API виклику
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Thank you for your donation!');
      
    } catch (error) {
      console.error('Donation failed:', error);
      alert('An error occurred while processing your donation. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Стилі компонентів
  const inputClassName = "w-full p-3 mt-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors";
  const labelClassName = "flex flex-col font-medium text-gray-700";
  const errorClassName = "text-red-500 text-sm mt-1";

  return (
    <div className="w-full max-w-4xl  py-6">
      {/* Секція вибору суми */}
      <div className="w-full mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Donation amount</h2>
        
        <div className="flex flex-wrap gap-3 mb-4">
          {[...PRESET_AMOUNTS, 'custom'].map((value) => {
            const isActive = selectedAmount === value;
            const displayValue = value === 'custom' ? 'Custom amount' : `$${value}`;
            
            return (
              <label
                key={value}
                className="relative inline-flex items-center justify-center px-6 py-3 cursor-pointer transition-all hover:scale-105"
              >
                {isActive && (
                  <motion.div
                    layoutId="amount-highlight"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="absolute inset-0 bg-green-600 rounded-lg shadow-lg"
                  />
                )}
                <input
                  className="sr-only"
                  type="radio"
                  name="amount"
                  value={value}
                  checked={isActive}
                  onChange={() => handleAmountSelect(value)}
                />
                <span
                  className={`relative z-10 font-semibold transition-colors ${
                    isActive ? "text-white" : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {displayValue}
                </span>
              </label>
            );
          })}
        </div>

        {selectedAmount === 'custom' && (
          <div className="relative w-48">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl font-bold text-gray-600 pointer-events-none z-10">
              $
            </span>
            <input
              ref={customAmountInputRef}
              type="number"
              min="1"
              step="0.01"
              value={customAmount || ''}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              className="w-full pl-8 pr-4 py-3 text-center text-xl font-bold rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="0.00"
            />
          </div>
        )}
        
        {errors.amount && <div className={errorClassName}>{errors.amount}</div>}
      </div>
      
      {/* Секція способу оплати */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Спосіб оплати</h2>
        
        <div className="flex gap-6 mb-4">
          {[
            { value: 'credit', label: 'Credit Card' },
            { value: 'paypal', label: 'PayPal' }
          ].map(({ value, label }) => (
            <label key={value} className="flex items-center cursor-pointer group">
              <div className="relative">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={value}
                  checked={formData.paymentMethod === value}
                  onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                  className="sr-only peer"
                />
                <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-green-500 peer-checked:bg-green-500 transition-all duration-200 group-hover:border-green-400">
                  <div className="w-2.5 h-2.5 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <span className="ml-3 text-lg font-medium text-gray-700 group-hover:text-green-600 transition-colors">
                {label}
              </span>
            </label>
          ))}
        </div>
        
        {errors.paymentMethod && <div className={errorClassName}>{errors.paymentMethod}</div>}
      </div>

      {/* Деталі карти (показуємо тільки для кредитної карти) */}
      {formData.paymentMethod === 'credit' && (
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-3">
              <label className={labelClassName}>
                Card Number
                <input
                  type="text"
                  value={formData.cardNumber}
                  onChange={(e) => handleInputChange('cardNumber', e.target.value.replace(/\D/g, '').slice(0, 16))}
                  className={inputClassName}
                  placeholder="1234 5678 9012 3456"
                  maxLength={16}
                />
                {errors.cardNumber && <div className={errorClassName}>{errors.cardNumber}</div>}
              </label>
            </div>
            
            <div>
              <label className={labelClassName}>
                Expiry Date
                <input
                  type="text"
                  value={formData.expiryDate}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    const formatted = value.replace(/(\d{2})(\d{0,2})/, '$1/$2').slice(0, 5);
                    handleInputChange('expiryDate', formatted);
                  }}
                  className={inputClassName}
                  placeholder="MM/YY"
                  maxLength={5}
                />
                {errors.expiryDate && <div className={errorClassName}>{errors.expiryDate}</div>}
              </label>
            </div>
            
            <div>
              <label className={labelClassName}>
                <div className="flex items-center gap-2">
                  CVC/CVV
                  <div className="group relative">
                    <svg className="w-4 h-4 text-gray-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      3-4 digits on the back of your card
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  value={formData.cvc}
                  onChange={(e) => handleInputChange('cvc', e.target.value.replace(/\D/g, '').slice(0, 4))}
                  className={inputClassName}
                  placeholder="123"
                  maxLength={4}
                />
                {errors.cvc && <div className={errorClassName}>{errors.cvc}</div>}
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Персональна інформація */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Personal information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <label className={labelClassName}>
            First Name
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className={inputClassName}
              placeholder="Your First Name"
            />
            {errors.firstName && <div className={errorClassName}>{errors.firstName}</div>}
          </label>
          
          <label className={labelClassName}>
            Last Name
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className={inputClassName}
              placeholder="Your Last Name"
            />
            {errors.lastName && <div className={errorClassName}>{errors.lastName}</div>}
          </label>
        </div>
        
        <label className={labelClassName}>
          Email
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={inputClassName}
            placeholder="your@email.com"
          />
          {errors.email && <div className={errorClassName}>{errors.email}</div>}
        </label>
      </div>

      {/* Підсумок та кнопка */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-6 bg-gray-50 rounded-lg">
        <div className="text-2xl font-bold text-gray-800">
          Donation amount:{" "}
          <span className="text-green-600">${finalAmount || 0}</span>
        </div>
        
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting || finalAmount <= 0}
          className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white text-lg font-bold rounded-full px-8 py-4 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 min-w-[200px]"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </div>
          ) : (
            'Donate'
          )}
        </button>
      </div>
    </div>
  );
}