import ThemeButton from "./style"

function Button({
  type,
  background,
  onClick,
  padding,
  width,
  maxHeight,
  height,
  className,
  children
}) {
  return (
    <ThemeButton
      type={type}
      background={background}
      onClick={onClick}
      padding={padding}
      width={width}
      maxHeight={maxHeight}
      height={height}
      className={className}
    >
      {children}
    </ThemeButton>
  )
}

export default Button
