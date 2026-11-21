// Maharashtra State Board Class 10 Mathematics Tutorial Database (All 13 Chapters)
const chapterTutorials = {
  // ==================== MATHS PART I — ALGEBRA ====================
  "m1-1": {
    title: "Linear Equations in Two Variables",
    lessons: [
      {
        id: "m1-1-l1",
        title: "Simultaneous Linear Equations (Elimination & Substitution)",
        objectives: [
          "Identify linear equations in two variables in general form ax + by + c = 0",
          "Solve simultaneous linear equations using Elimination and Substitution methods"
        ],
        hinglish: "Linear equation in two variables ka matlab hai aisi equation jisme do variables (jaise x aur y) hon aur dono ki maximum degree (power) 1 ho. Jaise 2x + 3y = 12. Jab hum aisi do equations ko ek sath solve karte hain taaki x aur y ki aisi common values mile jo dono equations ko satisfy karein, toh ise Simultaneous Linear Equations kehte hain. Elimination method me hum kisi ek variable ke coefficients ko same banakar add ya subtract karte hain taaki wo variable cancel ho jaye.",
        boardNotes: "An equation which contains two variables and the degree of each term containing variable is one, is called a linear equation in two variables. General form: ax + by + c = 0, where a, b, c are real numbers and a, b are not equal to zero at the same time. When we think about two linear equations in two variables at the same time, they are called simultaneous equations.",
        formulaBox: "General Form: ax + by + c = 0  (a ≠ 0, b ≠ 0)\nStandard Form for Solving: ax + by = c",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Elimination Method",
          problem: "Solve the simultaneous equations: 5x + 3y = 9 ... (I) and 2x - 3y = 12 ... (II)",
          steps: [
            "Observe the coefficients of y in both equations: they are +3 and -3 (equal in magnitude, opposite in sign).",
            "Adding equation (I) and equation (II): (5x + 3y) + (2x - 3y) = 9 + 12",
            "7x = 21  ⇒  x = 21 / 7  ⇒  x = 3.",
            "Substituting x = 3 in equation (I): 5(3) + 3y = 9  ⇒  15 + 3y = 9  ⇒  3y = 9 - 15 = -6  ⇒  y = -2.",
            "Therefore, (x, y) = (3, -2) is the solution of the given simultaneous equations."
          ]
        },
        commonMistakes: [
          "Forgetting to multiply every term of an equation when equalizing coefficients.",
          "Sign errors when subtracting one equation from another."
        ],
        examTips: [
          "Always write the final answer in ordered pair format: (x, y) = (3, -2).",
          "In special equations like 15x + 17y = 21 and 17x + 15y = 11, first add both equations and then subtract them to get two simple equations."
        ],
        checkpoint: {
          question: "Which of the following is a linear equation in two variables?",
          options: [
            "4x² + 3y = 12",
            "3x - 7y = 13",
            "2xy + 5 = 9",
            "5x + 0y = 8 (where coefficient of y is 0)"
          ],
          correct: 1,
          explanation: "In 3x - 7y = 13, both x and y have degree 1 and non-zero coefficients (a = 3, b = -7)."
        }
      },
      {
        id: "m1-1-l2",
        title: "Graphical Method & Determinant Method (Cramer's Rule)",
        objectives: [
          "Understand graphical representation of linear equations",
          "Evaluate 2×2 determinants and solve equations using Cramer's Rule"
        ],
        hinglish: "Har linear equation ka graph ek straight line hota hai. Jahan do lines intersect karti hain, us point ke coordinates (x, y) hi solution hote hain. Doosra powerful method hai Cramer's Rule: isme 2×2 Determinant |a b; c d| = ad - bc ka use karke direct D, Dx aur Dy nikala jata hai.",
        boardNotes: "Determinant of order 2: |a  b; c  d| = ad - bc. For simultaneous equations a1x + b1y = c1 and a2x + b2y = c2:\nD = |a1  b1; a2  b2|,  Dx = |c1  b1; c2  b2|,  Dy = |a1  c1; a2  c2|.\nBy Cramer's Rule: x = Dx / D and y = Dy / D (provided D ≠ 0).",
        formulaBox: "D = a1b2 - a2b1\nDx = c1b2 - c2b1\nDy = a1c2 - a2c1\nx = Dx / D,   y = Dy / D",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Cramer's Rule",
          problem: "Solve using Cramer's Rule: 3x - 4y = 10 ; 4x + 3y = 5",
          steps: [
            "Compare with a1x + b1y = c1 and a2x + b2y = c2: a1 = 3, b1 = -4, c1 = 10 and a2 = 4, b2 = 3, c2 = 5.",
            "D = (3)(3) - (-4)(4) = 9 - (-16) = 9 + 16 = 25.",
            "Dx = (10)(3) - (-4)(5) = 30 - (-20) = 30 + 20 = 50.",
            "Dy = (3)(5) - (10)(4) = 15 - 40 = -25.",
            "x = Dx / D = 50 / 25 = 2;   y = Dy / D = -25 / 25 = -1. Solution: (x, y) = (2, -1)."
          ]
        },
        commonMistakes: [
          "Applying Cramer's Rule before converting equations into ax + by = c form.",
          "Swapping columns when writing Dx (replace x-column with constants c1, c2) and Dy (replace y-column with constants)."
        ],
        examTips: [
          "Always write the scale on the top right corner of your graph paper (e.g., Scale: On both axes, 1 cm = 1 unit)."
        ],
        checkpoint: {
          question: "Find the value of the determinant | 5   3 | / | -7  0 |",
          options: ["21", "-21", "0", "35"],
          correct: 0,
          explanation: "Value = (5 × 0) - (3 × -7) = 0 - (-21) = +21."
        }
      },
      {
        id: "m1-1-l3",
        title: "Equations Reducible to Linear Form & Applications",
        objectives: [
          "Transform non-linear fractional equations into linear form using substitution",
          "Formulate simultaneous equations from word problems"
        ],
        hinglish: "Kai baar variables denominator me hote hain, jaise 2/x + 3/y = 13. Ise direct solve karna mushkil hota hai, isliye hum 1/x = m aur 1/y = n maan lete hain. Isse equation simple linear form 2m + 3n = 13 ban jati hai! Solve karne ke baad m aur n se wapas x aur y nikal lete hain.",
        boardNotes: "Equations of the form a1/x + b1/y = c1 and a2/x + b2/y = c2 are reduced to linear equations in two variables by substituting 1/x = m and 1/y = n. After finding m and n, resubstitute to obtain x and y.",
        formulaBox: "Substitution Rule: Let 1/x = m and 1/y = n\nAfter solving for m and n: x = 1/m,  y = 1/n",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Reducible Equations",
          problem: "Solve: 2/x + 3/y = 13 and 5/x - 4/y = -2",
          steps: [
            "Substitute 1/x = m and 1/y = n: 2m + 3n = 13 ... (I) and 5m - 4n = -2 ... (II).",
            "Multiply (I) by 4 and (II) by 3: 8m + 12n = 52 and 15m - 12n = -6.",
            "Adding both: 23m = 46  ⇒  m = 2. Substituting m = 2 in (I): 2(2) + 3n = 13  ⇒  3n = 9  ⇒  n = 3.",
            "Resubstituting: 1/x = 2 ⇒ x = 1/2, and 1/y = 3 ⇒ y = 1/3.",
            "Solution: (x, y) = (1/2, 1/3)."
          ]
        },
        commonMistakes: [
          "Stopping after finding m and n and forgetting to convert back to x and y."
        ],
        examTips: [
          "In word problems on ages, upstream/downstream boats, or two-digit numbers (10x + y), clearly define what x and y represent in your opening lines."
        ],
        checkpoint: {
          question: "If 1/x = 4 and 1/y = -1/3 after solving a reducible system, what is (x, y)?",
          options: ["(4, -3)", "(1/4, -3)", "(1/4, -1/3)", "(4, -1/3)"],
          correct: 1,
          explanation: "Taking reciprocals: x = 1/4 and y = -3."
        }
      }
    ]
  },

  "m1-2": {
    title: "Quadratic Equations",
    lessons: [
      {
        id: "m1-2-l1",
        title: "Standard Form & Factorization Method",
        objectives: [
          "Identify quadratic equations and write them in standard form ax² + bx + c = 0",
          "Find roots of a quadratic equation by factorization"
        ],
        hinglish: "Quadratic equation wo polynomial equation hoti hai jisme ek hi variable hota hai aur uski highest power (degree) 2 hoti hai. Standard form hai ax² + bx + c = 0 (jahan a ≠ 0). Factorization method me hum constant term c (ya a × c) ke do aise factors dhundhte hain jinka sum middle coefficient b ke barabar ho.",
        boardNotes: "The equation involving one variable and having 2 as the maximum index of the variable is called a quadratic equation. Standard form: ax² + bx + c = 0, where a, b, c are real numbers and a ≠ 0. Values of the variable which satisfy the equation are called roots of the quadratic equation.",
        formulaBox: "Standard Form: ax² + bx + c = 0  (a ≠ 0)\nZero Product Property: If P × Q = 0, then P = 0 or Q = 0",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Factorization",
          problem: "Solve the quadratic equation by factorization: x² - 15x + 54 = 0",
          steps: [
            "Here product a × c = 1 × 54 = 54, and sum b = -15.",
            "Factors of 54 whose sum is -15 are -9 and -6 (since (-9) × (-6) = 54 and -9 + (-6) = -15).",
            "Split the middle term: x² - 9x - 6x + 54 = 0",
            "Group and factor: x(x - 9) - 6(x - 9) = 0  ⇒  (x - 9)(x - 6) = 0",
            "x - 9 = 0 or x - 6 = 0  ⇒  x = 9 or x = 6. Roots are 9 and 6."
          ]
        },
        commonMistakes: [
          "Dividing both sides by a variable (like x) and losing the root x = 0.",
          "Forgetting to multiply a and c when the leading coefficient a is not 1."
        ],
        examTips: [
          "Write the final sentence clearly: '9 and 6 are the roots of the given quadratic equation.'"
        ],
        checkpoint: {
          question: "Which of the following is NOT a quadratic equation?",
          options: [
            "x² + 4x = 11 + x²",
            "x² - 9 = 0",
            "2y² = 5y - 3",
            "m(m - 5) = 0"
          ],
          correct: 0,
          explanation: "In x² + 4x = 11 + x², x² cancels out on both sides leaving 4x = 11, which is linear (degree 1)."
        }
      },
      {
        id: "m1-2-l2",
        title: "Completing the Square & Quadratic Formula Method",
        objectives: [
          "Solve quadratic equations using the formula method",
          "Compute the discriminant Δ = b² - 4ac accurately"
        ],
        hinglish: "Har quadratic equation ke factors aasani se nahi milte. Tab hum Quadratic Formula use karte hain: x = [-b ± √(b² - 4ac)] / 2a. Isme root ke andar jo b² - 4ac hai, use Discriminant (Δ) kehte hain. Pehle Δ nikal lene se calculation bahut clean aur error-free ho jati hai.",
        boardNotes: "For the quadratic equation ax² + bx + c = 0 (a ≠ 0), the roots are given by the formula:\nx = (-b ± √(b² - 4ac)) / 2a.\nTo solve by completing the square, make the coefficient of x² equal to 1 and add (1/2 × coefficient of x)² to both sides.",
        formulaBox: "Quadratic Formula: x = (-b ± √(b² - 4ac)) / 2a\nThird Term for Completing Square = (1/2 × coefficient of x)²",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Formula Method",
          problem: "Solve using formula: m² - 14m + 13 = 0",
          steps: [
            "Comparing with am² + bm + c = 0: a = 1, b = -14, c = 13.",
            "Find b² - 4ac = (-14)² - 4(1)(13) = 196 - 52 = 144.",
            "m = [-(-14) ± √144] / (2 × 1) = (14 ± 12) / 2.",
            "m = (14 + 12)/2 = 26/2 = 13   OR   m = (14 - 12)/2 = 2/2 = 1.",
            "Therefore, 13 and 1 are the roots of the given quadratic equation."
          ]
        },
        commonMistakes: [
          "Sign error in -b when b itself is negative (e.g., -(-14) becomes +14, not -14).",
          "Dividing only √Δ by 2a instead of dividing the entire numerator (-b ± √Δ) by 2a."
        ],
        examTips: [
          "Always compare with ax² + bx + c = 0 first and explicitly list the values of a, b, and c to earn step marks."
        ],
        checkpoint: {
          question: "For the equation 2x² - 5x + 2 = 0, what is the value of b² - 4ac?",
          options: ["9", "41", "-9", "25"],
          correct: 0,
          explanation: "b² - 4ac = (-5)² - 4(2)(2) = 25 - 16 = 9."
        }
      },
      {
        id: "m1-2-l3",
        title: "Nature of Roots & Relation Between Roots and Coefficients",
        objectives: [
          "Determine nature of roots using discriminant Δ",
          "Form a quadratic equation when roots α and β are given"
        ],
        hinglish: "Discriminant Δ = b² - 4ac ki value dekh kar hum bina solve kiye bata sakte hain ki roots kaise honge: agar Δ = 0 toh roots real aur equal; agar Δ > 0 toh real aur unequal; aur agar Δ < 0 toh roots real nahi honge. Agar roots α aur β diye hon, toh equation banti hai: x² - (α + β)x + αβ = 0.",
        boardNotes: "Nature of roots of ax² + bx + c = 0 depends on Δ = b² - 4ac:\n1. If Δ = 0, roots are real and equal.\n2. If Δ > 0, roots are real and unequal.\n3. If Δ < 0, roots are not real.\nIf α and β are roots: α + β = -b/a and αβ = c/a. Required quadratic equation: x² - (α + β)x + αβ = 0.",
        formulaBox: "Discriminant Δ = b² - 4ac\nSum of roots: α + β = -b / a\nProduct of roots: αβ = c / a\nEquation from roots: x² - (α + β)x + αβ = 0",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Forming Quadratic Equation",
          problem: "Obtain the quadratic equation if roots are -3 and -7.",
          steps: [
            "Let α = -3 and β = -7.",
            "Sum of roots: α + β = -3 + (-7) = -10.",
            "Product of roots: αβ = (-3) × (-7) = 21.",
            "Required equation: x² - (α + β)x + αβ = 0  ⇒  x² - (-10)x + 21 = 0",
            "x² + 10x + 21 = 0."
          ]
        },
        commonMistakes: [
          "Using + (α + β)x instead of - (α + β)x when forming the quadratic equation."
        ],
        examTips: [
          "When a problem states 'roots are real and equal', immediately set b² - 4ac = 0 to find the unknown constant k."
        ],
        checkpoint: {
          question: "If α and β are roots of 3x² - 6x + 5 = 0, what is α + β?",
          options: ["-2", "2", "5/3", "-6"],
          correct: 1,
          explanation: "α + β = -b/a = -(-6)/3 = 6/3 = 2."
        }
      }
    ]
  },

  "m1-3": {
    title: "Arithmetic Progression",
    lessons: [
      {
        id: "m1-3-l1",
        title: "Sequence, Arithmetic Progression & nth Term (tn)",
        objectives: [
          "Verify whether a given sequence is an Arithmetic Progression",
          "Calculate any term tn of an AP using tn = a + (n - 1)d"
        ],
        hinglish: "Numbers ki aisi ordered list jisme har agla term pichle term me ek constant number 'd' (common difference) add karne se milta hai, use Arithmetic Progression (AP) kehte hain. Jaise 4, 7, 10, 13... yahan first term a = 4 aur d = 3 hai. Koi bhi n-th term nikalne ke liye formula hai: tn = a + (n - 1)d.",
        boardNotes: "In a sequence, if the difference between any two consecutive terms (t_{n+1} - tn) is constant, then the sequence is called an Arithmetic Progression (A.P.). This constant difference is denoted by d (can be positive, negative, or zero). The nth term of an A.P. is given by tn = a + (n - 1)d.",
        formulaBox: "Common difference: d = t2 - t1 = t3 - t2\nnth term of A.P.: tn = a + (n - 1)d",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Finding nth Term",
          problem: "Find the 24th term of the A.P.: 12, 16, 20, 24, ...",
          steps: [
            "Here t1 = a = 12, t2 = 16, t3 = 20. Common difference d = 16 - 12 = 4.",
            "We have to find t24, so n = 24.",
            "Formula: tn = a + (n - 1)d",
            "t24 = 12 + (24 - 1) × 4 = 12 + 23 × 4 = 12 + 92 = 104.",
            "The 24th term of the given A.P. is 104."
          ]
        },
        commonMistakes: [
          "Subtracting t1 - t2 instead of t2 - t1 (getting the opposite sign for d)."
        ],
        examTips: [
          "To prove a sequence is an AP, calculate t2 - t1, t3 - t2, and t4 - t3 separately and state 'The difference between any two consecutive terms is constant'."
        ],
        checkpoint: {
          question: "For the A.P. 10, 7, 4, 1, ..., what is the common difference d?",
          options: ["3", "-3", "10", "-7"],
          correct: 1,
          explanation: "d = t2 - t1 = 7 - 10 = -3."
        }
      },
      {
        id: "m1-3-l2",
        title: "Sum of First n Terms (Sn) & Applications",
        objectives: [
          "Compute sum of first n terms Sn using both textbook formulae",
          "Apply AP concepts to word problems (savings, auditorium seats, etc.)"
        ],
        hinglish: "Agar hume AP ke pehle n terms ka total (sum) nikalna ho, toh Sn formula lagate hain: Sn = (n/2)[2a + (n - 1)d]. Agar first term (t1) aur last term (tn) dono pata hon, toh chhota formula Sn = (n/2)[t1 + tn] aur bhi fast kaam karta hai.",
        boardNotes: "Sum of first n terms of an A.P. is given by:\nSn = (n / 2)[2a + (n - 1)d]\nAlso, Sn = (n / 2)[t1 + tn], where t1 is the first term and tn is the nth term.",
        formulaBox: "Sn = (n / 2)[2a + (n - 1)d]\nSn = (n / 2)[t1 + tn]\ntn = Sn - S_{n-1}",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Sum of Even Numbers",
          problem: "Find the sum of all even natural numbers from 1 to 100.",
          steps: [
            "Even natural numbers from 1 to 100 are: 2, 4, 6, ..., 100.",
            "Here a = t1 = 2, d = 2, and last term tn = 100.",
            "First find n: 100 = 2 + (n - 1)2  ⇒  98 = 2(n - 1)  ⇒  49 = n - 1  ⇒  n = 50.",
            "Now apply Sn = (n / 2)[t1 + tn] = (50 / 2)[2 + 100] = 25 × 102 = 2550.",
            "The sum of all even natural numbers from 1 to 100 is 2550."
          ]
        },
        commonMistakes: [
          "Using the last term value (100) in place of n (50) in the Sn formula."
        ],
        examTips: [
          "Three consecutive terms in an AP are best assumed as (a - d), a, (a + d) because d cancels out when added!"
        ],
        checkpoint: {
          question: "What is the sum of the first 10 natural numbers (1 + 2 + ... + 10)?",
          options: ["45", "50", "55", "100"],
          correct: 2,
          explanation: "S10 = (10/2)(1 + 10) = 5 × 11 = 55."
        }
      }
    ]
  },

  "m1-4": {
    title: "Financial Planning",
    lessons: [
      {
        id: "m1-4-l1",
        title: "GST & Input Tax Credit (ITC) in Trading Chain",
        objectives: [
          "Calculate CGST, SGST, and Total Invoice Value",
          "Compute Input Tax Credit (ITC) and GST payable by a trader"
        ],
        hinglish: "GST (Goods and Services Tax) ke do barabar hisse hote hain: CGST (Central) aur SGST (State). Agar GST 18% hai, toh 9% CGST aur 9% SGST lagta hai. Jab koi dukandar samaan kharidte waqt tax bharta hai (Input Tax) aur bechte waqt customer se tax leta hai (Output Tax), toh sarkar ko sirf difference bharta hai: Payable GST = Output Tax - ITC.",
        boardNotes: "GST stands for Goods and Services Tax. Every registered trader has a 15-digit alphanumeric GSTIN. CGST = SGST = (1/2) × GST. At the time of paying GST to the government, a trader deducts the tax paid at the time of purchase (Input Tax Credit / ITC) from the tax collected at the time of sale (Output Tax).",
        formulaBox: "CGST = SGST = (Rate of GST / 2) × Taxable Value\nPayable GST = Output Tax - Input Tax Credit (ITC)",
        solvedExample: {
          title: "Textbook Pattern Solved Example: ITC & Payable GST",
          problem: "A wholesaler bought goods for taxable value ₹1,50,000 and sold them to a retailer for taxable value ₹1,80,000. Rate of GST is 18%. Find ITC and GST payable by wholesaler.",
          steps: [
            "Input Tax (ITC) = 18% of ₹1,50,000 = (18 / 100) × 150000 = ₹27,000.",
            "Output Tax = 18% of ₹1,80,000 = (18 / 100) × 180000 = ₹32,400.",
            "GST Payable = Output Tax - ITC = ₹32,400 - ₹27,000 = ₹5,400.",
            "Payable CGST = ₹5,400 / 2 = ₹2,700;  Payable SGST = ₹2,700."
          ]
        },
        commonMistakes: [
          "Calculating GST on the total bill amount (including tax) instead of the Taxable Value."
        ],
        examTips: [
          "Always split final Payable GST into Payable CGST and Payable SGST at the end of B2B chain problems."
        ],
        checkpoint: {
          question: "A trader collected ₹8,500 as Output Tax and had ₹6,200 as Input Tax Credit (ITC). How much GST is payable?",
          options: ["₹14,700", "₹2,300", "₹1,150", "₹6,200"],
          correct: 1,
          explanation: "Payable GST = Output Tax - ITC = ₹8,500 - ₹6,200 = ₹2,300."
        }
      },
      {
        id: "m1-4-l2",
        title: "Shares, Dividends, Brokerage & Mutual Funds",
        objectives: [
          "Distinguish between Face Value (FV) and Market Value (MV)",
          "Calculate Sum Invested, Dividend Income, Rate of Return, and Brokerage with GST"
        ],
        hinglish: "Share par chhapi hui original keemat ko Face Value (FV) kehte hain, aur market me jis rate par share milta hai use Market Value (MV) kehte hain. Company hamesha Dividend Face Value (FV) par deti hai, jabki humari Investment Market Value (MV) par hoti hai. Share kharidte waqt brokerage MV me add hoti hai aur bechte waqt MV se minus hoti hai.",
        boardNotes: "1. If MV > FV, the share is at premium.\n2. If MV = FV, the share is at par.\n3. If MV < FV, the share is at discount.\nDividend is always calculated on Face Value. Brokerage is calculated on Market Value, and 18% GST is levied on the brokerage amount.",
        formulaBox: "Sum Invested = Number of shares × MV\nDividend per share = FV × (Dividend %)\nRate of Return = (Total Dividend Income / Sum Invested) × 100\nPurchase Price = MV + Brokerage + 18% GST on Brokerage",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Rate of Return",
          problem: "Smt. Deshpande purchased shares of FV ₹5 at a premium of ₹20. How many shares will she get for ₹20,000? If company declares 20% dividend, find her rate of return.",
          steps: [
            "FV = ₹5, Premium = ₹20  ⇒  Market Value (MV) = FV + Premium = 5 + 20 = ₹25.",
            "Number of shares = Sum Invested / MV = 20,000 / 25 = 800 shares.",
            "Dividend per share = 20% of FV = (20 / 100) × 5 = ₹1. Total Dividend = 800 × ₹1 = ₹800.",
            "Rate of Return = (800 / 20,000) × 100 = 4%."
          ]
        },
        commonMistakes: [
          "Calculating dividend on Market Value (₹25) instead of Face Value (₹5).",
          "Applying 18% GST on the entire share value instead of applying it only on the Brokerage."
        ],
        examTips: [
          "For Mutual Funds: Number of Units = Total Investment / NAV (Net Asset Value)."
        ],
        checkpoint: {
          question: "If a share of Face Value ₹10 is trading at a discount of ₹2, what is its Market Value (MV)?",
          options: ["₹12", "₹8", "₹10", "₹2"],
          correct: 1,
          explanation: "At discount, MV = FV - Discount = ₹10 - ₹2 = ₹8."
        }
      }
    ]
  },

  "m1-5": {
    title: "Probability",
    lessons: [
      {
        id: "m1-5-l1",
        title: "Random Experiment, Sample Space (S) & Event",
        objectives: [
          "Write exact Sample Space S and n(S) for coins, dice, cards, and digit formation",
          "Identify sample points satisfying a given Event condition"
        ],
        hinglish: "Jis experiment ke saare possible results pehle se pata hon par exact result predict na kiya ja sake, use Random Experiment kehte hain. Saare possible outcomes ke set ko Sample Space (S) kehte hain aur uski ginti ko n(S). Kisi khaas condition ko satisfy karne wale outcomes ko Event (A, B, C) kehte hain.",
        boardNotes: "An experiment in which all possible results are known in advance but none of them can be predicted with certainty is called a Random Experiment. The set of all possible outcomes of a random experiment is called the Sample Space (S). The number of elements in S is denoted by n(S). A subset of sample space satisfying a specific condition is called an Event.",
        formulaBox: "1 Coin: n(S) = 2  |  2 Coins: n(S) = 4  |  3 Coins: n(S) = 8\n1 Die: n(S) = 6   |  2 Dice: n(S) = 36\nPack of Playing Cards: n(S) = 52 (26 Red, 26 Black; 13 of each suit)",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Two-Digit Numbers Without Repetition",
          problem: "Form two-digit numbers using digits 2, 3, 5 without repetition. Write S, n(S), and event A: the number is odd.",
          steps: [
            "Without repetition, digits cannot be repeated (no 22, 33, 55).",
            "Sample Space S = {23, 25, 32, 35, 52, 53}  ⇒  n(S) = 6.",
            "Event A (odd numbers): A = {23, 25, 35, 53}  ⇒  n(A) = 4."
          ]
        },
        commonMistakes: [
          "Including 22, 33, 55 when the question explicitly specifies 'without repetition'."
        ],
        examTips: [
          "Always remember: 52 cards = 13 Spades + 13 Clubs (26 Black) and 13 Hearts + 13 Diamonds (26 Red). Face cards = 12 (4 Kings, 4 Queens, 4 Jacks)."
        ],
        checkpoint: {
          question: "Three coins are tossed simultaneously. What is the number of sample points n(S)?",
          options: ["3", "6", "8", "9"],
          correct: 2,
          explanation: "S = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}, so n(S) = 2³ = 8."
        }
      },
      {
        id: "m1-5-l2",
        title: "Probability of an Event P(A) & Key Properties",
        objectives: [
          "Calculate probability P(A) = n(A) / n(S) and simplify fractions",
          "Apply range property 0 ≤ P(A) ≤ 1"
        ],
        hinglish: "Kisi event A ki probability nikalne ke liye favorable outcomes n(A) ko total outcomes n(S) se divide karte hain: P(A) = n(A) / n(S). Yaad rakho: Probability kabhi bhi negative nahi hoti aur kabhi 1 (ya 100%) se badi nahi ho sakti.",
        boardNotes: "In mathematical language, when possibility of an expected event is expressed in number, it is called Probability. For a sample space S and event A, P(A) = n(A) / n(S). Probability is expressed as a fraction or decimal between 0 and 1 (0 ≤ P(A) ≤ 1).",
        formulaBox: "P(A) = n(A) / n(S)\n0 ≤ P(A) ≤ 1   (or 0% ≤ P(A) ≤ 100%)",
        solvedExample: {
          title: "Textbook Pattern Solved Example: Two Dice Sum",
          problem: "Two dice are rolled simultaneously. Find the probability of event A that the sum of digits on upper faces is a multiple of 5.",
          steps: [
            "For two dice, n(S) = 36.",
            "Multiples of 5 possible as sum on two dice are 5 and 10.",
            "A = {(1,4), (2,3), (3,2), (4,1), (4,6), (5,5), (6,4)}  ⇒  n(A) = 7.",
            "P(A) = n(A) / n(S) = 7 / 36."
          ]
        },
        commonMistakes: [
          "Writing a probability greater than 1 (e.g., n(S)/n(A) by mistake)."
        ],
        examTips: [
          "Always write the formula P(A) = n(A) / n(S) explicitly before substituting values."
        ],
        checkpoint: {
          question: "Which of the following CANNOT represent the probability of an event?",
          options: ["2/3", "1.5", "15%", "0.7"],
          correct: 1,
          explanation: "Probability can never exceed 1, so 1.5 is impossible."
        }
      }
    ]
  },

  "m1-6": {
    title: "Statistics",
    lessons: [
      {
        id: "m1-6-l1",
        title: "Mean of Grouped Data (Direct, Assumed Mean & Step Deviation)",
        objectives: [
          "Calculate Class Mark xi and Deviation di = xi - A",
          "Compute Mean x̄ using Direct, Assumed Mean, and Step Deviation methods"
        ],
        hinglish: "Grouped data ka Mean (average) nikalne ke liye pehle har class ka midpoint yaani Class Mark xi = (Lower limit + Upper limit)/2 nikalte hain. Chhote numbers ke liye Direct Method (Σfi xi / Σfi) best hai. Bade numbers ke liye Assumed Mean (A) ya Step Deviation method calculation ko bahut aasan bana deta hai.",
        boardNotes: "1. Direct Method: Mean x