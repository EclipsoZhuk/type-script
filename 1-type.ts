const isFetching: boolean = true;
const ifLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello TypeScript';

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ['Hello', 'TypeScript'];

// Tuple
const contact: [string, number] = ['Vlad', 1234567];

//Any
let variable: any = 42;

variable = 'New String';
variable = [];

// ====
function sayMyName(name: string): void {
    console.log(name);
}

// sayMyName('Хайзенберг')

//Never
function thowError(message: string): never {
    throw new Error(message);
}

// Type
type Login = string;

const login: Login = 'admin';
// const login2: Login = 2;

type ID = string | number;

const id1: ID = 1234;
const id2: ID = '1234';
// const id3: ID = true;
