import React from 'react';
import { X, Check, Diamond, Shield, Zap } from 'lucide-react';

interface Props {
  onClose: () => void;
  onSubscribe: () => void;
}

const SubscriptionModal: React.FC<Props> = ({ onClose, onSubscribe }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-[2rem] w-full max-w-md relative overflow-hidden animate-scale-in shadow-2xl">
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-br from-indigo-600 to-purple-600"></div>
        <button onClick={onClose} className="absolute top-4 right-4 bg-black/20 text-white p-2 rounded-full hover:bg-black/40 transition-colors z-10">
          <X size={20} />
        </button>

        <div className="relative pt-12 px-8 pb-8 text-center">
          <div className="w-20 h-20 bg-white rounded-2xl mx-auto shadow-xl flex items-center justify-center mb-6 rotate-3">
            <Diamond size={40} className="text-indigo-600" />
          </div>

          <h2 className="text-2xl font-black text-slate-900 mb-2">Upgrade to Premium</h2>
          <p className="text-slate-500 mb-8">Unlock the full potential of your sociological journey.</p>

          <div className="space-y-4 mb-8 text-left">
            {[
              "Unlimited AI Tutor Chat",
              "Access to All Advanced Modules",
              "1-on-1 Mentorship Simulations",
              "Certified Digital Diploma"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-slate-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={onSubscribe}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-black uppercase tracking-widest shadow-lg shadow-indigo-200 hover:scale-[1.02] active:scale-95 transition-all"
          >
            Start 7-Day Free Trial
          </button>
          <p className="text-xs text-slate-400 mt-4">Then $19.99/mo. Cancel anytime.</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;
