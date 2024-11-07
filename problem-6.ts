
//problem-6
interface Profile {
    name: string;
    email: string;
    age: number;
}
const updateProfile = (profile: Profile, updates: Partial<Profile>): Profile => {
    return {
        ...profile,
        ...updates
    }
}

const myProfile = { name: "Sami", age: 25, email: "siam@example.com" };
console.log(updateProfile(myProfile, { age: 35 }));