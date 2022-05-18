export const Actions = {
    UPDATE_COORDINATES: 'UPDATE_COORDINATES',
    UPDATE_REGIONAL_INFO: 'UPDATE_REGIONAL_INFO'
};

export class Action {
    static updateCoordinates(coordinateArr) {
        return {
            type: Actions.UPDATE_COORDINATES,
            payload: coordinateArr
        };
    }

    static updateRegionalInfo(regionalInfo) {
        return {
            type: Actions.UPDATE_REGIONAL_INFO,
            payload: regionalInfo
        };
    }
}
