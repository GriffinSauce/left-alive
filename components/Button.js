const Button = ({
  children,
  type = 'button',
  disabled = false,
  size = 'base',
  color = 'primary',
  center = false,
}) => {
  const sizes = {
    sm: 'p-3',
    base: 'p-5',
  };
  const colors = {
    primary: 'bg-primary-500 text-white hover:bg-white hover:text-primary-500',
    secondary:
      'bg-secondary-500 text-white hover:bg-white hover:text-secondary-500',
    spotify: 'bg-spotify-500 text-white hover:bg-spotify-300',
    facebook: 'bg-facebook-500 text-white hover:bg-facebook-300',
    instagram: 'bg-instagram-500 text-white hover:bg-instagram-300',
  };
  return (
    <button
      type={type}
      disabled={disabled}
      className={`flex items-center w-full transition-colors duration-75 ${
        center ? 'justify-center' : ''
      } ${sizes[size]} ${colors[color]}`}
    >
      {children}
    </button>
  );
};

export default Button;
