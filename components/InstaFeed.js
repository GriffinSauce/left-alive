const InstaFeed = () => {
  return (
    <div className="instagram-feed">
      {/* <!-- Edit settings: https://lightwidget.com/edit-widget/4fab75b606525d2794cc290613ccfa9e (log in w. leftaliveband insta) --> */}
      <script src="//lightwidget.com/widgets/lightwidget.js" />
      <iframe
        title="Insta feed"
        src="//lightwidget.com/widgets/4fab75b606525d2794cc290613ccfa9e.html"
        scrolling="no"
        allowtransparency="true"
        className="lightwidget-widget"
        style={{
          width: '100%',
          border: 0,
          overflow: 'hidden',
        }}
      />
    </div>
  );
};

export default InstaFeed;
