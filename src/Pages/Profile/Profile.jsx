import useAuth from "../../Hooks/useAuth";
import useUser from "../../Hooks/useUser";
import bannerimg from "../../assets/bg-images/pngegg (3).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faEnvelope, faPhone, faUser, faVenusMars } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const { user, authdark } = useAuth();
  const [users, refetch, isLoading] = useUser();

  const profile = users.find((data) => data.email === user.email);
  console.log(profile);

  return (
    <div className="dark:bg-[#061551] dark:text-white pb-28">
      <div
        className={` ${
          authdark ? "dark-page-header" : "page-header"
        } h-[17rem] md:h-[20rem]`}
      >
        <div className="md:pt-32 pt-36 px-6 md:px-20 flex items-center justify-between">
          <p className="font2 text-xl font-semibold">
            Home /{" "}
            <span className="text-5xl font-semibold text-white">Profile</span>
          </p>
          <img className="w-[14em] md:block hidden" src={bannerimg} alt="" />
        </div>
      </div>

      <div className="flex items-center justify-center font2 gap-28 py-32">
        <div className="md:w-1/2">
            <div className="w-1/2 border-4 h-auto rounded-full py-12 ms-auto">
                <img className="mx-auto rounded-xl" src={profile.photo} alt="" />
            </div>
        </div>
        <div className="md:w-1/2 space-y-5">
            <p className="text-3xl font-semibold"><FontAwesomeIcon className="me-3" icon={faUser}/> {profile.name}</p>
            <p className="font-semibold"><FontAwesomeIcon className="me-3" icon={faEnvelope}/> {profile.email}</p>
            <p  className="font-semibold"><FontAwesomeIcon className="me-3" icon={faVenusMars}/> Gender: {profile.gender}</p>
            <p  className="font-semibold"> <FontAwesomeIcon className="me-3" icon={faPhone}/>Phone: {profile.phone}</p>
            <p  className="font-semibold"><FontAwesomeIcon className="me-3" icon={faCircleInfo}/> Role: {profile.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
