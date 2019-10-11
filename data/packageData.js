// 4: 1,4,7,8,9
// 6: 2
// 8: 3,6



const data = [
  {
    "id": 1,
    "name": "4 Camera, 2 MP",
    "sku": " SYSIP244T",
    "description": "ALIBI 2 MP 4-CAMERA 100' IR IP OUTDOOR SECURITY SYSTEM, AND 1TB HDD",
    "imageUrl": "https://i.imgur.com/WJxyw7A.png",
    "features": ["2.0 megapixel  1920 x 1080 resolution", "FOV of 114°", "Smart IR up to 100′ IR distance"],
    "packageCategory": "IP_CAMERA"
  },
  {
    "id": 2,
    "name": "6 Camera, 2 MP",
    "sku": "SYSIP268T",
    "description": "ALIBI 2 MP 6-CAMERA 100' IR IP OUTDOOR SECURITY SYSTEM,  AND 2TB HDD",
    "imageUrl": "https://i.imgur.com/SW9AWju.png",
    "features": ["2.0 megapixel 1920 x 1080 resolution", "FOV of 114°", "Smart IR up to 100′ IR distance\n"],
    "packageCategory": "IP_CAMERA"
  },
  {
    "id": 3,
    "name": "8 Camera, 2 MP",
    "sku": "SYSIP2816T",
    "description": "ALIBI 2 MP 8-CAMERA 100' IR IP OUTDOOR SECURITY SYSTEM, AND 2TB HDD",
    "imageUrl": "https://i.imgur.com/fQsgaED.png",
    "features": ["2.0 megapixel 1920 x 1080 resolution", "FOV of 114°", "Smart IR up to 100′ IR distance\n"],
    "packageCategory": "IP_CAMERA"
  },
  {
    "id": 4,
    "name": "4 Camera, 4 MP",
    "sku": "SYSIP444T", "description":
      "ALIBI 4 MP 4-CAMERA 100' IR IP OUTDOOR SECURITY SYSTEM, AND 1TB HDD",
    "imageUrl": "https://i.imgur.com/iecK0u1.png",
    "features": ["4.0 megapixel 2560 x 1440 resolution", "FOV of 100°", "Smart IR up to 100′ IR distance"],
    "packageCategory": "IP_CAMERA"
  },
  {
    "id": 5,
    "name":
      "6 Camera, 4 MP",
    "sku": "SYSIP468T",
    "description":
      "ALIBI 4 MP 6-CAMERA 100' IR IP OUTDOOR SECURITY SYSTEM, WITH 8-CHANNEL NVR AND 2TB HDD",
    "imageUrl": "https://i.imgur.com/cVcncZH.png",
    "features": ["4.0 megapixel 2560 x 1440 resolution", "FOV of 100°\nSmart IR up to 100′ IR distance"],
    "packageCategory": "IP_CAMERA"
  },
  {
    "id": 6,
    "name":
      "8 Camera, 4 MP",
    "sku": " SYSIP4816T",
    "description": "ALIBI 4 MP 8-CAMERA 100' IR IP OUTDOOR SECURITY SYSTEM, AND 2TB HDD",
    "imageUrl": "https://i.imgur.com/tR8ugUx.png",
    "features": ["4.0 megapixel 2560 x 1440 resolution", "FOV of 100°", "Smart IR up to 100′ IR distance"],
    "packageCategory": "IP_CAMERA"
  },
  {
    "id": 7,
    "name": "4 Camera, 8 MP",
    "sku": "SYSIP844D",
    "description": "ALIBI 4K 8 MP 4-CAMERA 120' IR IP OUTDOOR SECURITY SYSTEM,  AND 1TB HDD",
    "imageUrl": "https://i.imgur.com/9Pxp9Hw.png",
    "features": ["8.0 MP 20 fps 4K UHD 3840 x 2160 resolution; 2560 x 1920 @ 30 fps", "102° field of view", "120′ IR"],
    "packageCategory": "IP_CAMERA"
  },
  {
    "id": 8,
    "name": "4 Camera, 2 MP",
    "sku": "SYSHD244B",
    "description": "ALIBI 4-CAMERA 2.0 MP STARLIGHT 65' IR HD HYBRID+ OUTDOOR SYSTEM WITH 4-CHANNEL DVR",
    "imageUrl": "https://i.imgur.com/wQ7MxUi.png",
    "features": ["2.0 Megapixel 1920 × 1080 esolution", "Starlight Low Light", "FOV 103.0°", "65’ IR distance"],
    "packageCategory": "HD_TV_ANALOG_HD"
  },
  {
    "id": 9,
    "name": "4 Camera, 5 MP",
    "sku": "SYSHD544B",
    "description": "4-CAMERA 5.0 MEGAPIXEL 65' IR HD-TVI HYBRID+ OUTDOOR SECURITY CAMERA SYSTEM WITH 4-CHANNEL DVR\n",
    "imageUrl": "https://i.imgur.com/adVz4bL.png", "features": ["5.0 Megapixel 2560 × 1944 HD-TVI resolution", "85.5° field of view", " 65'IR distance"], "packageCategory": "HD_TV_ANALOG_HD"
  }, { "id": 10, "name": "4 Camera, 8 MP", "sku": "SYSHD844B", "description": "ALIBI 8 MP 4-CAMERA 131' IR HD-TVI HYBRID+ OUTDOOR SECURITY SYSTEM, WITH 4-CHANNEL DVR AND 1TB HDD", "imageUrl": "https://i.imgur.com/Us3yWJP.png", "features": ["4K 8.0 Megapixel @ 12.5 fps 3840 x 2160", "102.2° FOV", "131′ IR distance"], "packageCategory": "HD_TV_ANALOG_HD" }, { "id": 11, "name": "6 Camera, 2 MP", "sku": " SYSHD268B", "description": "ALIBI 6-CAMERA 2.0 MEGAPIXEL 65' IR HD-TVI HYBRID+ OUTDOOR SECURITY CAMERA SYSTEM WITH 8-CHANNEL DVR", "imageUrl": "https://i.imgur.com/CcG1Epx.png", "features": ["2.0 Megapixel 1920 x 1080", "103.0° FOV", "65'IR distance"], "packageCategory": "HD_TV_ANALOG_HD" }, { "id": 12, "name": "6 Camera, 5 MP", "sku": " SYSHD568B", "description": "6-CAMERA 5.0 MEGAPIXEL 65' IR HD-TVI HYBRID+ OUTDOOR SECURITY CAMERA SYSTEM WITH 8-CHANNEL DVR", "imageUrl": "https://i.imgur.com/SAwyrvA.png", "features": ["5.0 Megapixel 2560 × 1944 resolution", "85.5°FOV", "65' IR distance "], "packageCategory": "HD_TV_ANALOG_HD" }, { "id": 13, "name": "6 Camera, 8 MP", "sku": "SYSHD868B", "description": "ALIBI 8 MP 6-CAMERA 131' IR HD-TVI HYBRID+ OUTDOOR SECURITY SYSTEM, WITH 8-CHANNEL DVR AND 2TB HDD", "imageUrl": "https://i.imgur.com/gypgcsA.png", "features": ["4K 8.0 Megapixel @ 12.5 fps\n3840 x 2160", "102.2° FOV", "131'IR distance"], "packageCategory": "HD_TV_ANALOG_HD" }, { "id": 14, "name": "8 Camera, 2 MP", "sku": "SYSHD2816B", "description": "ALIBI 8-CAMERA 2.0 MEGAPIXEL 65' IR HD-TVI HYBRID+ OUTDOOR SECURITY CAMERA SYSTEM, WITH 16-CHANNEL DVR\nAND 2TB HDD", "imageUrl": "https://i.imgur.com/S0qOjqh.png", "features": ["2.0MP 1920 x 1080 resolution", "103.0° FOV", "65'IR distance"], "packageCategory": "HD_TV_ANALOG_HD" }, { "id": 15, "name": "8 Camera, 5 MP", "sku": "SYSHD5816B", "description": "8-CAMERA 5.0 MEGAPIXEL 65' IR HD-TVI HYBRID+ OUTDOOR SECURITY CAMERA SYSTEM WITH 16-CHANNEL DVR AND 2TB HDD", "imageUrl": "https://i.imgur.com/ifhfUe3.png", "features": ["5.0 MP 2560 × 1944 resolution", "85.5° FOV", "65'IR distance"], "packageCategory": "HD_TV_ANALOG_HD" }, { "id": 16, "name": "8 Camera, 8 MP", "sku": "SYSHD8816B", "description": "ALIBI 8 MP 8-CAMERA 131' IR HD-TVI HYBRID+ OUTDOOR SECURITY SYSTEM, WITH 16-CHANNEL DVR AND 2TB HDD", "imageUrl": "https://i.imgur.com/MKsdarE.png", "features": ["4K 8.0 3840 x 2160", "102.2° FOV", "131'IR distance"], "packageCategory": "HD_TV_ANALOG_HD" }
];

const formatDataForState = () => {

  const returnObj = {};

  data.forEach((o, i) => {

    if (o['name'].charAt(0) === '4') {
      if (returnObj['4'] === undefined) {
        returnObj['4'] = [];
        returnObj['4'].push(o);
      } else {
        returnObj['4'].push(o);
      }
    } else if (o['name'].charAt(0) === '6') {
      if (returnObj['6'] === undefined) {
        returnObj['6'] = [];
        returnObj['6'].push(o);
      } else {
        returnObj['6'].push(o);
      }
    } else if (o['name'].charAt(0) === '8') {
      if (returnObj['8'] === undefined) {
        returnObj['8'] = [];
        returnObj['8'].push(o);
      } else {
        returnObj['8'].push(o);
      }
    }

  });

  // return obj
  return returnObj;
}

module.exports = formatDataForState();