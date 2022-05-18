import {Actions} from "./Actions";

const initialState = {
    coordinates: [20.593684, 78.96288],
    regionalInfo: {
        name: 'Name: India 🇮🇳',
        currencySymbol: 'CurrencySymbol 💸: ₹',
        speedUnit: 'SpeedUnit 🏃: km/h',
        distanceUnit: 'DistanceUnit 📏: kilometer',
        volumeUnit: 'VolumeUnit 🚰: liter',
        timeZones: 'TimeZone(s) ⏲️️: UTC +05:30'
    }
};

export const rootReducer = (state= initialState, action) => {
    if(action.type === Actions.UPDATE_COORDINATES) {
        return {
            ...state,
            coordinates: [
                ...action.payload
            ]
        };
    } else if(action.type === Actions.UPDATE_REGIONAL_INFO) {
        return {
            ...state,
            regionalInfo: {
                ...state.regionalInfo,
                ...action.payload
            }
        };
    } else {
        return state;
    }
};



