// import {createLogger, format, transports,} from 'winston';
// const {combine, timestamp, printf, colorize, errors, } = format;

// const customFormat = printf(({level, message, timestamp, label}) => {
//     return `${timestamp}:${level}: ${message}`;

// });
//  const logger = createLogger({
//     format: combine(
//         timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
//         customFormat,
//     ),
//     transports: [new transports.Console(),
//         new transports.File({filename: 'logs/error.log'}) //file name is a property of transports.File
//     ],
//  });

//  export default logger;