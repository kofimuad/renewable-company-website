export default function Card({ 
  children, 
  border = true,
  padding = true,
  hover = false,
  className = '',
  ...props 
}) {
  return (
    <div 
      className={`
        ${border ? 'border-4 border-gray-700' : ''}
        ${padding ? 'p-8' : ''}
        ${hover ? 'hover:border-cyan-400 transition group cursor-pointer' : ''}
        bg-gray-900
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}