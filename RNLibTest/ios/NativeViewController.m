//
//  NativeViewController.m
//  RNLibTest
//
//  Created by FOODING on 16/12/1451.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "NativeViewController.h"

@interface NativeViewController ()

@end

@implementation NativeViewController


RCT_EXPORT_MODULE(NativeVC);



- (void)viewDidLoad {
  

	
  
    [super viewDidLoad];
  

	
    // Do any additional setup after loading the view.
    
  
    [self.view setBackgroundColor:[UIColor grayColor]];
  
	UILabel *lab = [[UILabel alloc] init];
	lab.center = self.view.center;
	lab.bounds = CGRectMake(0, 0, 100, 30);
	
	lab.text = @"这是Native VC";
	[self.view addSubview:lab];
  
	
    
	UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
	btn.frame = CGRectMake(50, 100, 50, 40);
	[btn setTitle:@"点击跳转RN VC" forState:UIControlStateNormal];
	
	[btn addTarget:self action:@selector(btnClick) forControlEvents:UIControlEventTouchUpInside];
	
	[self.view addSubview:btn];

    
  
}

- (void)btnClick
{
	NSLog(@"点击跳转");
    
    
	
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
