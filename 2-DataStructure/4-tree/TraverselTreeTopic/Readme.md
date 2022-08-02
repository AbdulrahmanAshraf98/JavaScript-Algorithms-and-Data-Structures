<!-- traversal  tree ApproachMeant  -->
<!--  Two Ways -->
<!--  Breath First Search  -->
<!--  Depth First Search  -->
<!--  these refer To general directions -->
<!--
    [1]--Breath First Search
-- >            5
-- >       4          6
-- >   14      8    4   6
-- > 3    8  4   2      20
 we Go  A cross tree 
 output => [5,4,6,14,8,4,6,3,8,4,2,20] 
    --How working
        in Breath First Search we want to visit every node in the same level 

    --How to Implement This 
        [1]--We Need Queue  FIFO
        [2]--Array To Store value for visited Node
        [2]--We Take the root and put it in the queue 
        [3]--We Loop As long As queue Has Item
        [4]--DeQueue a node from queue and push the value of the node into a variable to store current node 
        [5]--push current node value into Array 
        [5]--if the a left property on the node push into the queue 
        [6]--the same in the right property 
 -->
<!--
 [2]--Depth First Search  
      DFS > Three Order 
       [1]--In order 
       [2]--Pre order
       [3]--Post order
       we Go  A Vertically  down to the end  tree before visited siblings  Nodes  
       --How to Implement This 
       [1]-create Array to store value for visited node 
       [2]-create A reference for a parent node ;
       [3]-create A helper function called traversal 
       [5]-call traversal with root element 

       --traversal function Implement depend on order 
        --[1]-in case Pre order 
            --[1]--first we push the value in the array 
            --[2]--check if Node.left Exist so we called Traversal Again in Recursive Way and send node left as Parameter
            --[3]--same thing in a node.right
        --[2]-in case post  order
             the same Implement but the different we push the data in last not the first
             --[1]--check if Node.left Exist so we called Traversal Again in Recursive Way and send node left as Parameter
             --[2]--same thing in a node.right
             --[3]--end we push the value in the array 
        --[3]-in case In  order
              the same Implement but the different we push the data in middle not the first
              --[1]--check if Node.left Exist so we called Traversal Again in Recursive Way and send node left as Parameter
              --[2]--end we push the value in the array 
              --[3]--same thing in a node.right
             
--> 
<!-- 
    which better
        [1]-Breath First  Search 
        [2]-Depth  First  Search 
            depends  on the Tree 
            [1]-The time complexity The same For Two ApproachMeant Because we visit every node in the tree

            [2]-The Space Complexity different  For Two ApproachMeant
                [1]-Breath First  Search Take Extra Space Because the Queue grows   



 -->