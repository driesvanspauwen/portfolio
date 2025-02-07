import Image from 'next/image'

export default function NextJsLogo({width, height, className}: LogoProps) {
  return (
    <a
        href="https://www.php.net"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:opacity-80"
    >
      <Image
          width={width}
          height={height}
          className={className}
          src="/php-logo.svg"
          alt="Logo"
      />
    </a>
  )
}