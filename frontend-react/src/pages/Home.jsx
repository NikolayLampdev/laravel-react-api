import useAuthContext from "../context/AuthContext";

const Home = () => {
    const { user } = useAuthContext();

    return <div className="flex justify-center">{user?.name}</div>;
};

export default Home;
