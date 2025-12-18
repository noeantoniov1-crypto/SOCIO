import React, { useState } from 'react';
import { X, Loader2, ShieldCheck } from 'lucide-react';

interface Props {
  onClose: () => void;
  onLogin: (name: string, email: string) => void;
}

const FAKE_USERS = [
  { name: "Jordan Lee", email: "jordan.lee@gmail.com" },
  { name: "Alex Morgan", email: "alex.m@gmail.com" },
  { name: "Casey Rivera", email: "casey.rivera88@gmail.com" },
  { name: "Taylor Kim", email: "taylor.kim@gmail.com" },
  { name: "Riley O'Neil", email: "riley.oneil@gmail.com" },
  { name: "Morgan Freeman", email: "m.freeman@gmail.com" },
  { name: "Jamie Smith", email: "jamie.smith@gmail.com" }
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
      <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
      <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
      <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.734 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
      <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.799 L -6.734 42.379 C -8.804 40.449 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
    </g>
  </svg>
);

const AuthModal: React.FC<Props> = ({ onClose, onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    // Simulate network delay
    setTimeout(() => {
      const randomUser = FAKE_USERS[Math.floor(Math.random() * FAKE_USERS.length)];
      onLogin(randomUser.name, randomUser.email);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="bg-white rounded-3xl w-full max-w-sm p-8 relative animate-scale-in shadow-2xl overflow-hidden">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 z-10">
          <X size={20} />
        </button>
        
        <div className="text-center mb-8">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-indigo-600">
                <ShieldCheck size={32} />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">Welcome to Socios</h2>
            <p className="text-slate-500 text-sm">Create your profile to save progress and earn certificates.</p>
        </div>
        
        <div className="space-y-4">
          <button 
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full py-3.5 px-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-3 relative overflow-hidden group shadow-sm"
          >
            {isLoading ? (
                <Loader2 size={20} className="animate-spin text-slate-400" />
            ) : (
                <>
                    <GoogleIcon />
                    <span>Continue with Google</span>
                </>
            )}
          </button>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center">
                <span className="bg-white px-2 text-xs text-slate-400 uppercase tracking-wider">Secure Access</span>
            </div>
          </div>
          
          <p className="text-[10px] text-center text-slate-400 leading-relaxed px-4">
              By continuing, you acknowledge that this is a demo environment and account data is stored locally on your device.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;