const NewsletterForm = () => {
  return (
    <form method="post">
      <div className="form-fields">
        <p>
          <input type="text" name="FNAME" placeholder="your name" required="" />
        </p>
        <p>
          <input type="email" name="EMAIL" placeholder="email" required="" />
        </p>
        <p>
          <input type="submit" value="Sign me up!" />
        </p>
      </div>
      <label style={{ display: 'none' }} htmlFor="newsletter_hp">
        {`Leave this field empty if you're human: `}
        <input
          type="text"
          name="newsletter_hp"
          value=""
          tabIndex="-1"
          autoComplete="off"
        />
      </label>
    </form>
  );
};

export default NewsletterForm;
