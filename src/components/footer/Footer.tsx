import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contain">
        <div className="footer-newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettä muse.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="button">SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-column">
          <h3>CONTACT US</h3>
          <ul>
            <li>
              <a href="tel:+442211335360">+44 221 133 5360</a>
            </li>
            <li>
              <a href="mailto:customercare@mettamuse.com">customercare@mettamuse.com</a>
            </li>
          </ul>
          <h3>Currency</h3>
          <ul>
            <li>
              <span>+USD</span>
            </li>
            <li>
              <span>Transactions will be completed in Euros and a currency reference is available on hover.</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
