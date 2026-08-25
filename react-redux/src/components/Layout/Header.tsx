import reactLogo from './../../assets/react.svg'

const Header = (props: { title: string }) => {
    return (
        <div className="py-2 pl-2" style={{ borderBottom: "1px solid #777" }}>
            <img src={reactLogo} />
            <span className="h2 pt-4 m-2 text-white-50">{props.title}</span>
        </div>

    );
}

export default Header;