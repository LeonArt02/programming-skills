class Solution(object):
    def setZeroes(self, matrix):
        m , n = len(matrix) , len(matrix[0])
        setRows , setCols = [0] * m ,[0]* n

        for r in range(m):
            for c in range(n):
                if matrix[r][c]==0:
                    setRows[r] , setCols[c] = 1 , 1
        for r in range(m):
            if setRows[r] == 1:
                for c in range(n):
                    matrix[r][c]=0
        
        for c in range(n):
            if setCols[c] == 1:
                for r in range(m):
                    matrix[r][c]=0

        return matrix

inst = Solution()
ex2 = inst.setZeroes(matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]])
print(ex2)