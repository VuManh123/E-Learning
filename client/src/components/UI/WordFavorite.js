import FavoriteIcon from '@material-ui/icons/Favorite';
import UnFavoriteIcon from '@material-ui/icons/FavoriteBorder';
import accountApi from 'services/accountService';
import { ROUTES } from 'constant';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setMessage } from 'redux/slices/message.slice';
import { setAddFavorites } from 'redux/slices/userInfo.slice';

function WordFavorite({ word }) {
  const { isAuth, username, favoriteList } = useSelector(
    (state) => state.userInfo,
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const isFavorite =
    favoriteList.findIndex((i) => i.toLowerCase() === word.toLowerCase()) !==
    -1;

  const handleClick = async () => {
    try {
      //console.log(`Username: ${username}, word: ${word}, isFavorite: ${!isFavorite}`);
      const apiRes = await accountApi.putToggleWordFavorite(
        username,
        word,
        !isFavorite,
      );
      if (apiRes.status === 200) {
        dispatch(setAddFavorites({ word, isAdd: !isFavorite }));
        const message = !isFavorite
          ? 'Đã thêm vào mục yêu thích!'
          : 'Đã xóa khỏi mục yêu thích!';
        dispatch(setMessage({ type: 'success', message }));
      } else {
        throw new Error('Cập nhật danh sách yêu thích thất bại');
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Thất bại, thử lại !';
      dispatch(setMessage({ type: 'error', message }));
    }
  };

  return (
    <>
      {isAuth ? (
        <>
          {isFavorite ? (
            <FavoriteIcon
              onClick={handleClick}
              className="dyno-favorite active"
            />
          ) : (
            <UnFavoriteIcon onClick={handleClick} className="dyno-favorite" />
          )}
        </>
      ) : (
        <UnFavoriteIcon
          onClick={() => history.push(ROUTES.LOGIN)}
          className="dyno-favorite"
        />
      )}
    </>
  );
}

WordFavorite.propTypes = {
  word: PropTypes.string,
};

WordFavorite.defaultProps = {
  word: '',
};

export default WordFavorite;
