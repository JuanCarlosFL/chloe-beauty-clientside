export interface AvailabilityVM {
    Date: string;
    TimesByDate: [
        {
            Id: number;
            Time: string;
        }
    ]
}

export const createEmptyAvailability = (): AvailabilityVM[] => {
    return [
        {
            Date: '',
            TimesByDate: [{
              Id: 0,
              Time: ''  
            }]
        }
    ]
}

export const createEmptyAvailabilityItem = (): AvailabilityVM => {
    return {
            Date: '',
            TimesByDate: [{
              Id: 0,
              Time: ''  
            }]
        }
    
}