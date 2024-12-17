const { MAX } = require('../constant');
const { randomWordQuestionPack } = require('../helper/game.helper');
const { getWordPack } = require('../services/common.service');

// ======== CORRECT WORD GAME ========
exports.getWordPackCWG = async (req, res, next) => {
  try {
    let { nQuestion = 50, ...packInfo } = req.query;

    nQuestion = parseInt(nQuestion);
    if (nQuestion > MAX.LEN_WORD_PACK) nQuestion = MAX.LEN_WORD_PACK;

    const packages = await getWordPack(
      packInfo,
      0,
      1500,
      '-_id word mean phonetic synonyms',
    );

    const packLen = packages.length > nQuestion ? nQuestion : packages.length;

    if (packLen < 4) {
      return res.status(200).json({ wordPack: [] });
    }
    const wordPack = randomWordQuestionPack(packages, packLen);
    return res.status(200).json({ wordPack });
  } catch (error) {
    console.error('GET WORD PACK CWG ERROR: ', error);
    return res.status(503).json({ message: 'Lỗi dịch vụ, thử lại sau' });
  }
};