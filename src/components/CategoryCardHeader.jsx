import { useState } from 'react';

const CategoryCardHeader = ({
  image,
  title,
  stats,
  button,
  imageShare,
  bgColor = 'bg-[#380C67]',
}) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: `Check out ${title} events!`,
      text: `${title} - ${stats}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        console.log('Shared successfully');
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  // Handle subscription
  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);

    // call the API in the future
    // console.log(`User ${isSubscribed ? "unsubscribed from" : "subscribed to"} ${title}`)

    // Show feedback to user
    const message = isSubscribed
      ? `Unsubscribed from ${title}`
      : `Subscribed to ${title}`;

    // Simple feedback - replace with toast notification or other UI feedback
    alert(message);

    // setup when the api is ready from the backend by CTO
    /*
      try {
        const response = await api.subscribeToCategory(categoryId, !isSubscribed);
        if (response.success) {
          setIsSubscribed(!isSubscribed);
          // Show success message
        } else {
          // Show error message
        }
      } catch (error) {
        console.error('Subscription error:', error);
        // Show error message
      }
      */
  };

  return (
    <div className="flex gap-4 items-center border-b border-b-[#00000014] pb-10">
      <div className="bg-white size-[122px] rounded-full flex items-center justify-center">
        <img src={image} alt={title} className="size-[71px]" />
      </div>

      <div>
        <h1 className="text-[27px] font-600 mb-2">{title}</h1>
        <h2 className="text-black text-50 mb-4">{stats}</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={handleSubscribe}
            className={`${
              isSubscribed ? 'bg-black' : bgColor
            } text-white rounded-full px-4 py-2 transition-colors`}
          >
            {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
          </button>

          <div className="bg-white rounded-2xl p-2" onClick={handleShare}>
            <img
              src={imageShare}
              alt={title}
              className="w-6 h-6 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCardHeader;
