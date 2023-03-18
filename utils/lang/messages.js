
//declaring all necessary status code and messages
const response = {

    // success list
    'CAG001' : {'code' : 'CAG001', 'message' : 'Service Healthy'},
    'CAG002' : {'code' : 'CAG002', 'message' : 'Request has been completed successfully'},

    // error or failure cases list
    'CAGE001': {'code' : 'CAGE001', 'message' : 'Api authentication failed'},
    'CAGE002': {'code' : 'CAGE002', 'message' : 'Mandatory parameters missing or validation failed'},
    'CAGE003': {'code' : 'CAGE003', 'message' : 'Something went wrong please try again'},

    /* Response message for middleware */
    'CAGE500' : {'code' : 'CAGE500', 'message' : 'Body Should not be empty'},
    'CAGE501' : {'code' : 'CAGE501', 'message' : 'queue id is invalid!'},

    /* Response message for unit test cases */
    'CAGE700' :  'Error during fetching data from queue table',

};

module.exports.response = response;