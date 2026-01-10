export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) {
  const baseStyles = 'font-black tracking-widest transition duration-300 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'border-4 border-cyan-400 bg-cyan-400 text-black hover:bg-black hover:text-cyan-400',
    secondary: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black',
    ghost: 'text-cyan-400 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-lg',
    lg: 'px-12 py-6 text-xl',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}