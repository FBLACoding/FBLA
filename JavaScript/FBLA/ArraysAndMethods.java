import java.util.Arrays;

public class ArraysAndMethods {
	//hi me
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] balls = {1, 2, 3, 4, 5, 6, 7};
		int [] balls3 = {7, 6, 5, 4, 3, 2, 1};
		int [] balls4 = {2,4,7,8};
		String[] balls2 = {"Eddy", "Liam", "Asher", "Michael", ""};
		
		System.out.println(sumArray(balls));
		System.out.println(averArray(balls));
		System.out.println(maxArray(balls));
		System.out.println(moreCharArray(balls2));
		System.out.println(numbGreaterThan(balls, 2));
		System.out.println(getLongestStringLength(balls2));
		System.out.println(reverseArray(balls));
		swap(balls, 1, 3);
		System.out.println(Arrays.toString(balls));
		System.out.println(findNum(balls, 2));
		swap(balls, 1, 3);
		System.out.println(Arrays.toString(balls));
		
		System.out.println(isAscendingOrder(balls));
		
		System.out.println(firstCharArray(balls2, 'c'));
		
		System.out.println(totalArray(balls, balls3));
		
		System.out.println(divNumber(balls, 1));
		
		System.out.println(middleNum(balls4));
	}
	
	public static int sumArray(int [] list) {
		int sum = 0;
		for(int i = 0; i < list.length; i++){
			sum += list[i];
		}
		
		return sum;
	}
	
	public static double averArray(int[] nums) {
		int total = sumArray(nums);
		double average = total/nums.length;
		return average;
	}
	
	public static int  maxArray ( int  []  values ) { 
		int highest =0;
		for(int i = 0; i < values.length-1;i++) {
			highest = Math.max(values[i], values[i+1]);
		}
		return highest;
	} 
	
	public static int   moreCharArray( String  []  names) { 
		int more = 0;
	 for(String name : names) {
		 if (name.length()>5) {
			 more++;
		 }
	 } 
	 
	 return more;
	 
	} 
	
	public static int numbGreaterThan( int[] list, int x ) { 
		int count = 0;
	  for(int i = 0; i < list.length; i++) {
		  if(list[i] > x) {
			  count++;
		  }
	  }
	  
	  return count;
	 
	}
	
	public static int getLongestStringLength( String[] names ) 
	{ 
		int longest = 0;
	 for (String name : names) {
		 if (name.length()>longest) {
			 longest = name.length();
		 }
	 } 
	 
	 return longest;
	 
	}
	
	public static void swap( int[] numbs, int a, int b) { 
	 
		int temp = numbs[a];
		numbs[a] = numbs[b];
		numbs[b] = temp;
		
		
	 
	}
	
	public static String reverseArray( int[] values) 
	{ 
		int [] reverse = new int[values.length];
	 for(int i = 0; i < values.length; i++) {
		 reverse[i] = values[values.length-1-i];
	 }
	 
	 return Arrays.toString(reverse);
	 
	}
	
	public  static int  findNum (int [] list, int n) 
	{ 
	 for (int i = 0; i < list.length; i++) {
		 if (list[i] == n) {
			 return i;
		 }
		 
	 }
	 return -1;
	 
	}
	
	public static boolean  isAscendingOrder (int [] arr) 
	{ 
		boolean isTrue = true;
		
	 for (int i = 0; i < arr.length-1; i++) {
		 if (arr[i] > arr[i+1]) {
			 isTrue = false;
		 } 
		 
	 }
	 
	 return isTrue;
	 
	}
	
	public static int  firstCharArray(String  []  list, char  c ) 
	{ 
		int count= 0;
		for (int i = 0; i < list.length-1; i++) {
			 if (list[i].charAt(0) == c)  {
				count ++;
			 } 
			 
		 }
	 
	 return count;
	 
	 
	} 
	
	public static String totalArray (int [] arr1, int [] arr2) 
	{ 
	 
	 int [] total = new int[arr1.length];
	 
	 for(int i = 0; i < arr1.length; i++) {
		 total[i] = arr1[i] + arr2[i];
	 }
	 
	 return Arrays.toString(total);
	 
	} 
	
	public  static  int  divNumber(int [] list, int n) 
	{ 
		int count = 0;
		for(int i: list) {
			if(i % n == 0) {
				count ++;
			}
		}
	 
	 return count;
	 
	}
	
	public  static  double  middleNum (int []  list) 
	{ 
	double middle = 0;
	int half = list.length/2;

		 if(list.length%2 == 1) {
			 middle = list[half];
		 } else { 
			 middle = ((double) list[half] + list[half-1])/2;
		 }
		 
		 return middle;

	 }
	 
	 
	 
	
	
	
	

}
