const info = ["diego", "mama", "leiza", "termo", "mate"];

export const getPruebaService = async () => {  
   return info;
};

export const postPruebaService = async (newData) => {
   const createInfo = await getPruebaService();
   createInfo.push(newData.data);
   return createInfo;
};