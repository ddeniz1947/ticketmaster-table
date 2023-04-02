interface EventModel {
    name: String,
    type: String,
    id: String,
    test: Boolean,
    url: String,
    locale: String,
    images: [
        {
            ratio: String,
            url: String,
            width: Number,
            height: Number,
            fallback: Boolean
        },
    ],
    sales: any,
    dates: {
        start: {
            localDate: String,
            localTime: String,
            dateTime: String,
            dateTBD: Boolean,
            dateTBA: Boolean,
            timeTBA: Boolean,
            noSpecificTime: Boolean
        },
        initialStartDate: {
            localDate: String,
            localTime: String,
            dateTime: String,
        },
        timezone: String,
        status: {
            code: String,
        },
        spanMultipleDays: Boolean
    },
    classifications: any,
    promoter: any,
    promoters: any,
    info: String,
    priceRanges: [
        {
            type: String
            currency: String,
            min: Number,
            max: Number,
        }
    ],
    products: any,
    seatmap: {
        staticUrl: String
    },
    accessibility: {
        ticketLimit: 4
    },
    ticketLimit: {
        info: String,
    },
    ageRestrictions: {
        legalAgeEnforced: Boolean
    },
    ticketing: any,
    _links: {
        self: {
            href: String,
        },
        attractions: [
            {
                href: String,
            }
        ],
        venues: [
            {
                href: String,
            }
        ]
    },
    _embedded: any
}

export { EventModel };