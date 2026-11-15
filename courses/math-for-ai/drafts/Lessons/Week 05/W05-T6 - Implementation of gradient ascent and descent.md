# Week 5: Implementation of gradient ascent and descent

**MATH 309/509 Math for AI** · Calculus and optimization

In this lesson, we will discuss the details of how to implement gradient ascent and descent in Python using SymPy.

## Gradient optimization function

A Python function named `gradient_optimization()` has been provided for you in this course. You will load the function from the `utils.py` script in the [`drbeane/math_509`](https://github.com/drbeane/math_509/) GitHub repository. In this lesson, we will discuss the details of how this function is implemented. We will begin by sharing the code for the function.

## The gradient\_optimization() function

```
def gradient_optimization(sym_fn, vars, init_vals, alpha, max_iter,
                          threshold, mode='min', verbosity=0):

    import sympy as sym
    import numpy as np

    if mode not in ['max', 'min']:
        raise Exception("The mode parameter must be set to 'max' or 'min'.")

    params = np.array(init_vals)
    param_list = [params]

    gradient = sym.derive_by_array(sym_fn, vars)

    sub_dict = {var:val for var, val in zip(vars, params)}
    f_val = sym_fn.subs(sub_dict)

    found = False
    div = False

    for i in range(1, max_iter+1):
        grad = gradient.subs(sub_dict)

        if mode == 'min':
            params = params - alpha * grad
        elif mode == 'max':
            params = params + alpha * grad
        param_list.append(params)

        old_f_val = f_val
        sub_dict = {var:val for var, val in zip(vars, params)}
        f_val = sym_fn.subs(sub_dict)

        if (verbosity > 0) and (i % verbosity == 0):
            param_str = ', '.join([f'{p:.4f}' for p in params])
            print(f'Iteration {i:03}:  params = [{param_str}],  f(params) = {f_val:.4f}')

        df = abs(old_f_val - f_val)
        max_grad = max([abs(c) for c in grad])

        if df < threshold and max_grad < threshold:
            found = True
            break

        if abs(f_val) > 1e20:
            div = True
            break

    if verbosity > 0: print()
    if found:
        print(f'Algorithm converged in {i} steps.')
        param_str = ', '.join([f'{p:.4f}' for p in params])
        print(f'Final parameter estimates: [{param_str}]')
        print(f'Optimal value: {f_val:.4f}')
        return params, param_list
    else:
        print('🛑 No local extremum found.🛑')
        if div:
            print('Algorithm terminated due to function values getting extremely large.')
            print('This indicates that the algorithm is diverging.')
            print('Consider reducing the learning rate.\n')
        else:
            print('Maximum iterations reached without algorithm converging.')
            print('Consider increasing the learning rate.\n')
        return None, param_list
```

Let's discuss the parts of this function piece-by-piece. We'll start by considering the two lines that create `params` and `param_list`.

```
    params = np.array(init_vals)
    param_list = [params]
```

The first line simply converts the initial values into a NumPy array. The second line stores these into a list. This list will store all of the parameter estimates found while the algorithm is executing. Storing the old estimates is not necessary for the algorithm to run correctly, but we will do this so that we can visualize the convergence process later.

Just before those lines, the function performs a check to confirm that the `mode` parameter is set correctly.

```
    if mode not in ['max', 'min']:
        raise Exception("The mode parameter must be set to 'max' or 'min'.")
```

The next step is to use SymPy to symbolically calculate the gradient.

```
    gradient = sym.derive_by_array(sym_fn, vars)
```

In order to determine if the algorithm has converged (at least approximately), we will need to keep track of the values of the function before and after a parameter update. The two lines of code below accomplish this. The first line creates a dictionary of current parameter values, which is then substituted into the function in the second line.

```
    sub_dict = {var:val for var, val in zip(vars, params)}
    f_val = sym_fn.subs(sub_dict)
```

The algorithm might terminate without finding a local extremum, so we will create a Boolean flag to indicate whether or not an extremum was found. We also create a Boolean flag to indicate if the algorithm terminates because it appears to be diverging.

```
    found = False
    div = False
```

We now loop for some number of iterations.

```
    for i in range(1, max_iter+1):
```

The first step in each iteration of the loop will be to numerically calculate the gradient for the current parameter values.

```
        grad = gradient.subs(sub_dict)
```

The next step is to perform gradient ascent or descent. This is shown below. Note that we append the updated parameters to the parameter list that we created previously.

```
        if mode == 'min':
            params = params - alpha * grad
        elif mode == 'max':
            params = params + alpha * grad
        param_list.append(params)
```

In the next three lines of code, we store the previous value of the function and calculate a new value.

```
        old_f_val = f_val
        sub_dict = {var:val for var, val in zip(vars, params)}
        f_val = sym_fn.subs(sub_dict)
```

The code shown below is used to print an update about the progress of the algorithm.

```
        if (verbosity > 0) and (i % verbosity == 0):
            param_str = ', '.join([f'{p:.4f}' for p in params])
            print(f'Iteration {i:03}:  params = [{param_str}],  f(params) = {f_val:.4f}')
```

Next, we calculate the difference between the values of the function in the two most recent iterations. We will also calculate the magnitude of the largest element of the gradient.

```
            df = abs(old_f_val - f_val)
            max_grad = max([abs(c) for c in grad])
```

Next, we will consider two stopping conditions. The first condition will cause the algorithm to stop if the value of the function has not changed significantly and all of the terms of the gradient are small. The second condition will stop the algorithm if the value of the function has become too large in absolute value. This second condition is included specifically for the examples in this class to terminate the algorithm if it is diverging toward infinity.

```
        if df < threshold and max_grad < threshold:
            found = True
            break
```

```
        if abs(f_val) > 1e20:
            div = True
            break
```

The final lines of code in the function are used to print the results of the algorithm and to return the optimal parameters (if found) as well as the list of estimates encountered by the algorithm.

```
    if verbosity > 0: print()
    if found:
        print(f'Algorithm converged in {i} steps.')
        param_str = ', '.join([f'{p:.4f}' for p in params])
        print(f'Final parameter estimates: [{param_str}]')
        print(f'Optimal value: {f_val:.4f}')
        return params, param_list
    else:
        print('🛑 No local extremum found.🛑')
        if div:
            print('Algorithm terminated due to function values getting extremely large.')
            print('This indicates that the algorithm is diverging.')
            print('Consider reducing the learning rate.\n')
        else:
            print('Maximum iterations reached without algorithm converging.')
            print('Consider increasing the learning rate.\n')
        return None, param_list
```
