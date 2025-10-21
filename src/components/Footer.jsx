export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>&copy; {year} Aldi - System Engineer &amp; Data Platform Developer</p>
        <div className="footer-links">
          <a href="https://github.com/aldimiq" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/aldimiq" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:hello@aldimiq.dev">Email</a>
        </div>
      </div>
    </footer>
  );
}
