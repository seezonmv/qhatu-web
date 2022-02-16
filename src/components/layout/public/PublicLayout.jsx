import './PublicLayout.css';

const PublicLayout = (props) => {
  return (
    <div className="body-public">
      <div className="form-signin text-center">{props.children}</div>
    </div>
  );
};

export default PublicLayout;
