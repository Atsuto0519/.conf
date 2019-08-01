import numpy as np
import matplotlib.pyplot as plt

e=1.6*10**(-19)
u_0=0.25*e
L=1*10**(-9)
h=6.626*10**(-34)/(2*np.pi)
m=9.1093897*10**(-31)
#print(h)
beta=(2*m*u_0*L**2)/(h**2)

zeta=np.arange(0,np.pi*3,0.000001)
tan_zeta=np.tan(zeta)
result=np.sqrt(beta/zeta**2-1)

flag=True
hoge=0
for i in range(zeta.shape[0]):
    if flag==True and tan_zeta[i]>result[i]:
        flag=False
        hoge=zeta[i]
        print(zeta[i-1],zeta[i])

E=(h**2*hoge**2)/(2*m*L**2)-u_0
ans=E/e
print(ans)
plt.ylim(0,10)
plt.plot(zeta,tan_zeta,c='g')
plt.plot(zeta,result)
#plt.show()
plt.savefig("1_1.jpg")
