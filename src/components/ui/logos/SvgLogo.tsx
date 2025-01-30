export default function SvgLogo({
    width = 18,
    height = 18,
    className = '',
    viewBox = '0 0 180 180',
    href,
    children
}) {
    const SvgContent = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={viewBox}
            width={width}
            height={height}
            className={className}
        >
            {children}
        </svg>
    )

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:opacity-80"
            >
                {SvgContent}
            </a>
        )
    }

    return SvgContent
}