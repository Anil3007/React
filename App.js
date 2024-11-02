import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=restaurant-food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resData = [
  {
    info: {
      id: "678546",
      name: "Wow! China",
      cloudinaryImageId: "95982cfa57cb3b7e504f2015c375fd55",
      locality: "ST. Thomas Mount",
      areaName: "Sholinganallur Signal",
      costForTwo: "₹300 for two",
      cuisines: [
        "Tibetan",
        "Chinese",
        "Asian",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages",
      ],
      avgRating: 3.8,
      parentId: "226836",
      avgRatingString: "3.8",
      totalRatingsString: "1.1K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-03 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/wow-china-st-thomas-mount-sholinganallur-signal-rest678546",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "234986",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/45e36d68-938f-490d-b221-f2e296be4271_234986.jpg",
      locality: "Gire Thoraipakkam",
      areaName: "Nehru Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "15K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-03 03:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/mcdonalds-gire-thoraipakkam-nehru-nagar-rest234986",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "25881",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/25/c170b5d4-592e-473c-8bf7-334fd269082e_25881.jpg",
      locality: "Shollinganalur",
      areaName: "Sholinganallur",
      costForTwo: "₹350 for two",
      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.5,
      parentId: "2",
      avgRatingString: "4.5",
      totalRatingsString: "15K+",
      sla: {
        deliveryTime: 14,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-02 23:57:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Sandwiches.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Sandwiches.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/subway-shollinganalur-sholinganallur-rest25881",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "748065",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_748065.JPG",
      locality: "OMR Semmanchey",
      areaName: "Kancheepuram",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "3.2K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-03 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/burger-king-omr-semmanchey-kancheepuram-rest748065",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "691463",
      name: "The Brownie Studio",
      cloudinaryImageId: "68590de82cfdd60b837cca9399e9127b",
      locality: "perumpakkam main road",
      areaName: "Medavakkam",
      costForTwo: "₹800 for two",
      cuisines: [
        "Bakery",
        "Desserts",
        "Ice Cream",
        "Sweets",
        "Ice Cream Cakes",
        "Cafe",
      ],
      avgRating: 4.7,
      parentId: "5976",
      avgRatingString: "4.7",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-03 00:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Desserts.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Desserts.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹749",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/the-brownie-studio-perumpakkam-main-road-medavakkam-rest691463",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "617972",
      name: "SMOOR",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/14/ae6a609c-e6f6-4765-8ec0-51e1de8580da_617972.jpg",
      locality: "Ex Serviceman Colony",
      areaName: "Medavakkam",
      costForTwo: "₹350 for two",
      cuisines: ["Desserts", "Bakery"],
      avgRating: 4.5,
      parentId: "475296",
      avgRatingString: "4.5",
      totalRatingsString: "704",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-02 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.2",
          ratingCount: "57",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/smoor-ex-serviceman-colony-medavakkam-rest617972",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "611155",
      name: "Cheesecakes By CakeZone",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/12/717fe8d6-cc25-487a-b9cf-83c11b043fb4_611155.jpg",
      locality: "Dr. Ambedkar Cross Stree",
      areaName: "Perumbakkam",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.3,
      veg: true,
      parentId: "348057",
      avgRatingString: "4.3",
      totalRatingsString: "165",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-03 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/cheesecakes-by-cakezone-dr-ambedkar-cross-stree-perumbakkam-rest611155",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "611150",
      name: "The Dessert Heaven - Pastry, Brownie and Cakes",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/25/37b765ff-7f3b-47ae-a3e1-d31594e011a8_611150.JPG",
      locality: "Dr. Ambedkar Cross Stree",
      areaName: "Perumbakkam",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
      avgRating: 4.3,
      veg: true,
      parentId: "506176",
      avgRatingString: "4.3",
      totalRatingsString: "722",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-03 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/the-dessert-heaven-pastry-brownie-and-cakes-dr-ambedkar-cross-stree-perumbakkam-rest611150",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "592991",
      name: "Great Indian Khichdi by EatFit",
      cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
      locality: "4th Cross Street",
      areaName: "Muthamzhil Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "Home Food", "Healthy Food", "Snacks"],
      avgRating: 4.3,
      parentId: "319582",
      avgRatingString: "4.3",
      totalRatingsString: "1.1K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-02 23:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹159",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/great-indian-khichdi-by-eatfit-4th-cross-street-muthamzhil-nagar-rest592991",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "592995",
      name: "HRX by EatFit",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/28/9b094668-3975-4064-a78c-3b4202a60bc0_592995.JPG",
      locality: "4th Cross Street",
      areaName: "Muthamzhil Nagar",
      costForTwo: "₹450 for two",
      cuisines: ["Healthy Food", "Salads", "Burgers"],
      avgRating: 4.4,
      parentId: "335529",
      avgRatingString: "4.4",
      totalRatingsString: "603",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-02 23:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/hrx-by-eatfit-4th-cross-street-muthamzhil-nagar-rest592995",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "592992",
      name: "Home Plate by EatFit",
      cloudinaryImageId: "1d578bb732e03c6f591790eb7d2d88e2",
      locality: "4th Cross Street",
      areaName: "Muthamzhil Nagar",
      costForTwo: "₹250 for two",
      cuisines: [
        "North Indian",
        "Home Food",
        "Healthy Food",
        "Indian",
        "Punjabi",
        "South Indian",
        "Rajasthani",
        "Maharashtrian",
        "Snacks",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.3,
      parentId: "301197",
      avgRatingString: "4.3",
      totalRatingsString: "855",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-02 23:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/home-plate-by-eatfit-4th-cross-street-muthamzhil-nagar-rest592992",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "587672",
      name: "Chaayos Chai+Snacks=Relax",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/f92c604d-68cb-49db-8dec-9473650c363d_587672.JPG",
      locality: "VILLAGE HIGH ROAD",
      areaName: "Sholinganallur",
      costForTwo: "₹250 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Home Food",
        "Italian",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "Sweets",
      ],
      avgRating: 4.4,
      parentId: "281782",
      avgRatingString: "4.4",
      totalRatingsString: "1.5K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-03 01:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/chaayos-chai-snacks-relax-village-high-road-sholinganallur-rest587672",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "49821",
      name: "Hot Breads",
      cloudinaryImageId: "6feb1d22bb913dbabcde6304becc2f55",
      locality: "Medavakkam",
      areaName: "Medavakkam",
      costForTwo: "₹150 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.5,
      parentId: "470",
      avgRatingString: "4.5",
      totalRatingsString: "5.3K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-02 21:45:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "419",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/hot-breads-medavakkam-rest49821",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "689910",
      name: "SMOOR",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/14/dfe1afba-a68a-4a34-9101-eecb1143d963_689910.jpg",
      locality: "East Coast Rd",
      areaName: "Injambakkam",
      costForTwo: "₹350 for two",
      cuisines: ["Desserts", "Bakery"],
      avgRating: 4.7,
      parentId: "3506",
      avgRatingString: "4.7",
      totalRatingsString: "178",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-02 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/smoor-east-coast-rd-injambakkam-rest689910",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "395365",
      name: "McDonald's Gourmet Burger Collection",
      cloudinaryImageId: "eatjnqnudbkbbwnvjho4",
      locality: "Gire Thoraipakkam",
      areaName: "Karapakkam",
      costForTwo: "₹600 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.1,
      parentId: "10761",
      avgRatingString: "4.1",
      totalRatingsString: "514",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-03 03:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/mcdonalds-gourmet-burger-collection-gire-thoraipakkam-karapakkam-rest395365",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "801253",
      name: "Makhani Darbar",
      cloudinaryImageId: "c583da4b69d264ffe705e5918fad0e98",
      locality: "Medavakkam",
      areaName: "Ex-Service Man colony,1st Street",
      costForTwo: "₹500 for two",
      cuisines: ["Kebabs", "Mughlai", "Beverages", "Desserts"],
      avgRating: 4.1,
      parentId: "478595",
      avgRatingString: "4.1",
      totalRatingsString: "50",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-02 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹249",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/makhani-darbar-medavakkam-ex-service-man-colony-1st-street-rest801253",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "185756",
      name: "Krispy Kreme",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/19/564faa01-26bc-4c03-b6fb-8444b3223196_185756.jpg",
      locality: "Egattur",
      areaName: "Egattur",
      costForTwo: "₹170 for two",
      cuisines: ["Desserts", "Beverages"],
      avgRating: 4.5,
      veg: true,
      parentId: "570",
      avgRatingString: "4.5",
      totalRatingsString: "2.0K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "9.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-02 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Waffle.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Waffle.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "30",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/krispy-kreme-egattur-rest185756",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "67801",
      name: "Chai Kings",
      cloudinaryImageId: "hea70vpxjbymdzaauyfd",
      locality: "Thuraipakkam",
      areaName: "Sri Sowdeswari Nagar",
      costForTwo: "₹150 for two",
      cuisines: ["Beverages", "Snacks", "Bakery"],
      avgRating: 4.5,
      parentId: "2627",
      avgRatingString: "4.5",
      totalRatingsString: "18K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-02 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/chai-kings-thuraipakkam-sri-sowdeswari-nagar-rest67801",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "592993",
      name: "EatFit",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/6/5084876d-8910-44e4-b913-9ac68e57af7f_592993.jpg",
      locality: "4th Cross Street",
      areaName: "Karapakkam",
      costForTwo: "₹270 for two",
      cuisines: [
        "Chinese",
        "Healthy Food",
        "Tandoor",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani",
      ],
      avgRating: 4.3,
      parentId: "76139",
      avgRatingString: "4.3",
      totalRatingsString: "2.9K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-02 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/eatfit-4th-cross-street-karapakkam-rest592993",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "62987",
      name: "LunchBox - Meals and Thalis",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/5dba8993-14c2-4c98-a7f6-6ebd807eee2a_62987.jpg",
      locality: "Ex Service Man colony,1st Street",
      areaName: "Medavakkam",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.4,
      parentId: "4925",
      avgRatingString: "4.4",
      totalRatingsString: "17K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-11-02 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹159",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-8ec3009d-d662-4b14-aa9a-d20c0bb56de3",
    },
    cta: {
      link: "https://www.swiggy.com/city/chennai/lunchbox-meals-and-thalis-ex-service-man-colony-1st-street-medavakkam-rest62987",
      type: "WEBLINK",
    },
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info
  return (
    <div className="res-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="res-logo"
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resData.map((restaurant) => (
          <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
