// Header.jsx

const Header = ({ name, title }) => {
  return (
    <header className="bg-gray-900 text-white py-8 px-8">
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="text-lg">{title}</p>
    </header>
  );
};

export default Header;
