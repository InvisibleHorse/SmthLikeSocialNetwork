const initialState = {
  firendsList: [
    {
      id: 1,
      key: 1,
      name: 'Me',
      // eslint-disable-next-line max-len
      img: 'https://static.wixstatic.com/media/fbbdae_0627a5ba64ce4710bb958fcd291d593f~mv2.jpg/v1/crop/x_0,y_160,w_960,h_960/fill/w_606,h_606,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/photo_2023-04-01_14-54-38.jpg'
    },
    {
      id: 2,
      key: 2,
      name: 'Myself',
      // eslint-disable-next-line max-len
      img: 'https://static.wixstatic.com/media/fbbdae_b2437a96d4d94429be0c34ef1e7a8bb5~mv2.jpg/v1/crop/x_0,y_161,w_959,h_959/fill/w_606,h_606,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/photo_2023-04-01_14-54-37.jpg'
    },
    {
      id: 3,
      key: 3,
      name: 'I',
      // eslint-disable-next-line max-len
      img: 'https://static.wixstatic.com/media/fbbdae_d001a41eb1bc4c0682225297e7c4ad05~mv2.jpg/v1/crop/x_0,y_321,w_959,h_959/fill/w_606,h_606,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/photo_2023-04-01_14-54-38%20(2).jpg'
    },
  ]
};

const sidebarReducer = (state = initialState) => state;
export default sidebarReducer;
