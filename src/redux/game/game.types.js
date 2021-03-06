const GameActionTypes = {
    START_NEW_GAME : 'START_NEW_GAME',
    SELECT_CARD :'SELECT_CARD',
    UNSELECT_CARD :'UNSELECT_CARD',
    ATTEMPT_TO_MATCH : 'ATTEMPT_TO_MATCH',
    FOUND_MATCHING_CARDS: 'FOUND_MATCHING_CARDS',
    RESET_CARD_TABLE: 'RESET_CARD_TABLE',
    FINISH_GAME: 'FINISH_GAME',
    CONTINUE_PLAYING: 'CONTINUE_PLAYING',

    RESTART_CURRENT_GAME : 'RESTART_CURRENT_GAME',
    CANCEL_CURRENT_GAME: 'CANCEL_CURRENT_GAME',

    SHOW_ALL_CARDS : 'SHOW_ALL_CARDS',
    HIDE_ALL_CARDS : 'HIDE_ALL_CARDS' 
};

export default GameActionTypes;