import {useRouter} from "next/router";

const profile = (props) => {
    const router = useRouter();
    const user = router.query.id
    return ( 
    <div className="flex min-h-screen m-0 p-0 flex-wrap justify-center items-center bg-indigo-300">
        <p className="text-center font-semibold text-black text-2xl">gm! {user} 👋</p>
    </div> );
}
 
export default profile;