const {URL} = require('../utils/constans');

module.exports = {
  RegisterPhoneApiCall: URL + 'api/user/login',
  VerifyOTPApiCall: URL + 'api/user/verify-otp',
  SessionCheckApiCall: URL + 'api/user/session-mantain',
  GetAllCountriesApiCall: URL + 'api/country/get-all',
  GetAllCityApiCall: URL + 'api/city/get-all',
  GetLookUpByIdApiCall: URL + 'api/lookup/get-all',
  UserAboutSetupProfile: URL + 'api/user-about/setup-profile',
  UserAboutSetupProfilePartwo: URL + 'api/user-about/user-about-post',
  EditUserProfileApiCall: URL + 'api/user-about/post',
  GetAllBlockedUsersApiCall: URL + 'api/block/get-all',
  BlockUserApiCall: URL + 'api/block/post',
  UnBlockUserApiCall: URL + 'api/block/delete',
  GetAllLikedProfilesApiCall: URL + 'api/like/get-all',
  GetAllFavouriteProfilesApiCall: URL + 'api/favourite/get-all',
  GetAllReportedProfilesApiCall: URL + 'api/favourite/get-all',
  GetNotificationsByUserID: URL + 'api/notification/get',
  HideMyProfileApiCall: URL + 'api/user-about/hide-profile',
  UpdateProfilePictureApiCall: URL + 'api/user-about/update-profile-picture',
  UpdatePersonalInfoApiCall: URL + 'api/user-about/edit-profile-personal-info',
  UpdateReligiostyInfoApiCall: URL + 'api/user-about/edit-profile-religiosty',
  UpdateLifeStyleInfoApiCall: URL + 'api/user-about/edit-profile-lifestyle',
  UpdateFuturePlansInfoApiCall:
    URL + 'api/user-about/edit-profile-future-plans',
};
