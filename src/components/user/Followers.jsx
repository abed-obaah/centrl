const Followers = ({ follower }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <img
            className="size-14 object-cover"
            src={follower.image}
            alt={follower.name}
          />
          <h3 className="text-100 font-600 relative after:absolute after:content-[' '] after:bottom-2 after:-right-5 after:bg-black after:size-2 after:rounded-full">
            {follower.name}
          </h3>
        </div>

        <p>
          <span className="font-700">{follower.count}</span> followers
        </p>
      </div>

      <button className="text-50 font-600 text-foreground/50 px-4 py-1 rounded-xl bg-[#f9f9f9]">
        {follower.isSubscribed && 'Subscribed'}
      </button>
    </div>
  );
};

export default Followers;
