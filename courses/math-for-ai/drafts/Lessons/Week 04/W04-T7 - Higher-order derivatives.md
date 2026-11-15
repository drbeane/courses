# Week 4: Higher-order derivatives

**MATH 309/509 Math for AI** · Calculus and optimization

In this lesson, we will introduce the concept of higher-order derivatives, which are simply derivatives of derivatives. The concepts discussed in this lesson are demonstrated in the following Colab notebook: [Higher-Order Derivatives](https://colab.research.google.com/drive/1CFrJYCwiW6IgQ87P1DOUNTZ8tzYAnE2o?usp=sharing).

## Higher-order derivatives

Since the derivative of a function $f\left(x\right)$ is also a function of the same variable, we can calculate its derivative as well. The derivative of the derivative of a function $f\left(x\right)$ is referred to as the **second derivative** of $f\left(x\right)$. The second derivative of $f\left(x\right)$ is denoted by $f''\left(x\right)$. If we differentiate the second derivative, we obtain the **third derivative**, $f'''\left(x\right)$. We can continue this process indefinitely. After the third derivative, the notation changes, with the **n-th** **derivative** of $f\left(x\right)$ being denoted by $f^{(n)}\left(x\right)$ for $n \geq 4$. The second and higher derivatives of a function are collectively known as **higher-order derivatives**. We summarize this information below.

- **First derivative:** $f'(x) = \frac{d}{dx}f\left(x\right)$
- **Second derivative:** $f''(x) = \frac{d}{dx}f'\left(x\right)$
- **Third derivative:** $f'''(x) = \frac{d}{dx}f''\left(x\right)$
- **Fourth derivative:** $f^{(4)}(x) = \frac{d}{dx}f'''\left(x\right)$

## Calculating higher-order derivatives with SymPy

Higher-order derivatives can be calculated with SymPy by repeatedly calling the `diff()` method. We will demonstrate this by calculating the first four derivatives of the following polynomial function:

$$f(x)=-0.02x^4+1.2x^3-23x^2+160x+200$$

```
f = lambda x : -0.02*x**4 + 1.2*x**3 - 23*x**2 + 160*x + 200
x = sym.Symbol('x')
f_sym = f(x)

df1 = f_sym.diff()     # Calculate 1st derivative
df2 = df1.diff()        # Calculate 2nd derivative
df3 = df2.diff()        # Calculate 3rd derivative
df4 = df3.diff()        # Calculate 4th derivative

display(df1)            # Display 1st derivative
display(df2)            # Display 2nd derivative
display(df3)            # Display 3rd derivative
display(df4)            # Display 4th derivative
```

The derivatives found by this code are shown below. Each of these derivatives can be calculated using the power rule for differentiation.

$$f^{\prime}(x)=-0.08x^3+3.6x^2-46x+160$$

$$f''(x)=-0.24x^2+7.2x-46$$

$$f'''(x) =- 0.48x + 7.2$$

$$f^{(4)}(x) = -0.48$$

## Interpreting higher-order derivatives

Derivatives represent rates of change. Since higher-order derivatives are derivatives of derivatives, they represent rates of change in derivatives, or in other words, rates of change for rates of change.

As an example of this, suppose that the function $f\left(t\right)$ represents the position of an object at time $t$. Then, the first derivative $f'\left(t\right)$ gives the velocity of the object at time $t$ and the second derivative $f''\left(t\right)$ gives the acceleration at time $t$.

## Additional resources

The following video from the YouTube channel "3Blue1Brown" discusses higher-order derivatives.

<div class="video"><iframe src="https://www.youtube.com/embed/BLkz5LGWihw" title="Higher Order Derivatives | 3Blue1Brown" loading="lazy" allowfullscreen></iframe></div>

3Blue1Brown. *Higher Order Derivatives* \[Video File\]. Retrieved from YouTube.
