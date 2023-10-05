const Card = ({ children, title, subtitle }) => {
  return (
    <div id="card">
      {title || subtitle ? (
        <div className="header">
          {title && <p className="title">{title}</p>}
          {subtitle && <p className="subtitle">{subtitle}</p>}
        </div>
      ) : null}
      <div className="mainBox">{children}</div>
    </div>
  );
};
export default Card;
