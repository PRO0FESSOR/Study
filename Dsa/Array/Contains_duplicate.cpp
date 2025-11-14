// Problem is to tell weather the array contains the duplicate or not.

#include<iostream>
#include<vector>
#include<unordered_set>

auto contains_duplicate(std::vector<int>&nums) -> void {
    
    std::unordered_set<int>seen;

    for( const auto& num:nums){
        if(seen.find(num) != seen.end()){
            std::cout<<"Yes contains duplicate"<<std::endl;
            return;
        } 

        seen.insert(num);
   }

    std::cout<<"No contains duplicate"<<std::endl;
    return;
}

int main(){

    auto nums = std::vector<int>{1,2,3,4,5,6,7};
    
    contains_duplicate(nums);

    return 0;

}
