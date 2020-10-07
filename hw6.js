const human = Object.create({}, {

    fullName: {
        set: function(fullName) {
            [this.name, this.lastName] = fullName.split(' ');
        },

        get: function () {
            return `${this.name} ${this.lastName}`;
        }
    },

    dateOfBith: {
        set: function (date) {
            this.age = ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000));
        },

        get: function () {
            return Math.floor(this.age);
        }
    }
})


human.fullName = 'Max Hramtsoff';
console.log(human.fullName);
human.dateOfBith = '1995-01-26';
console.log(human.dateOfBith);