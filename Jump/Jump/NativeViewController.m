//
//  NativeViewController.m
//  Jump
//
//  Created by FOODING on 16/12/1451.
//  Copyright © 2016年 Noohle. All rights reserved.
//

#import "NativeViewController.h"

@interface NativeViewController ()

@end

@implementation NativeViewController



- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    self.view.backgroundColor = [UIColor grayColor];
    UILabel *lab = [[UILabel alloc] init];
    lab.frame = CGRectMake(100, 100, 150, 80);
    lab.numberOfLines = 0;
    lab.lineBreakMode = NSLineBreakByCharWrapping;
    lab.backgroundColor = [UIColor cyanColor];
    lab.text = [NSString stringWithFormat:@"从JS传过来的参数为：%@", self.paramsString];
    [self.view addSubview:lab];
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
