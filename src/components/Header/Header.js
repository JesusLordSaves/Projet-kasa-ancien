import './header.scss';

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        K<svg width="47" height="54" viewBox="0 0 47 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.0322 35.8419V48.4414L37.3731 45.2915V32.6921L32.0322 35.8419Z" fill="#FF6060"/>
<path d="M46.7658 20.4632L24.8496 7.67844L12.6944 0.637573L0.723389 21.5749L0.907555 41.2152L22.6396 54L24.8496 52.703V34.1744L34.6106 16.9428L44.5557 22.6866V41.2152L46.7658 39.9182V20.4632Z" fill="#FF6060"/>
</svg>
sa
      </div>
      <nav>
        <a href="/" className="active-link">ACCUEIL</a>
        <a href="/about" className="apropos">À PROPOS</a>
      </nav>
    </header>
  );
}

export default Header;

