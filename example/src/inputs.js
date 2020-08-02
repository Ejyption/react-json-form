export const inputs = [
  {
    name: 'firstName',
    label: 'First Name',
    placeholder: 'Put your name here',
    autoFocus: true
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email Address',
    placeholder: 'eg Emad@example.com'
  },
  {
    type: 'time',
    name: 'startTime',
    label: 'Start Time',
    width: 'half'
  },
  {
    type: 'time',
    name: 'endTime',
    label: 'End Time',
    width: 'half'
  },
  {
    type: 'date',
    name: 'dob',
    label: 'Date of Birth',
    helper: 'You have to be older than me',
    beforeDate: '03/09/1990'
  },
  {
    type: 'toggle',
    name: 'subscribe',
    label: 'Subscribe to our mailing service?',
    required: true
  },
  {
    type: 'number',
    name: 'weight',
    label: 'Weight',
    placeholder: 'eg 82.5'
  },
  {
    type: 'select',
    name: 'favouriteCharacter',
    label: "Which 'Friends' character do you like most?",
    placeholder: 'Select from these options',
    helper: 'This will help us understand who you relate to most.',
    options: [
      { label: 'Ross', value: 'Ross' },
      { label: 'Rachel', value: 'Rachel' },
      { label: 'Monica', value: 'Monica' },
      { label: 'Chandler', value: 'Chandler' },
      { label: 'Joe', value: 'Joe' },
      { label: 'Pheobe', value: 'Pheobe' }
    ]
  },
  {
    type: 'checklist',
    name: 'favouriteGenres',
    label: 'Which movie genres do you like?',
    placeholder: 'Select from these options',
    options: [
      { label: 'Action', value: 'Action' },
      { label: 'Comedy', value: 'Comedy' },
      { label: 'Crime', value: 'Crime' },
      { label: 'Drama', value: 'Drama' },
      { label: 'Romantic', value: 'Romantic' },
      { label: 'Thriller', value: 'Thriller' }
    ],
    value: ['Action', 'Thriller']
  }
]
