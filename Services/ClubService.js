

exports.getClub = async (request, response) => {
  try {
    return response
        .status(200)
        .json({ status: false, data: null, message: "service working fine" });
    
  } catch (error) {
    return response
      .status(500)
      .json({ status: false, data: null, message: error });
  }
};


